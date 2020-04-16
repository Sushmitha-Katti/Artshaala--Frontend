{
  "nbformat": 4,
  "nbformat_minor": 0,
  "metadata": {
    "colab": {
      "name": "tinyimagenet.py",
      "provenance": [],
      "collapsed_sections": [],
      "authorship_tag": "ABX9TyPpqEhovMK1eprvQMPlSVAv",
      "include_colab_link": true
    },
    "kernelspec": {
      "name": "python3",
      "display_name": "Python 3"
    }
  },
  "cells": [
    {
      "cell_type": "markdown",
      "metadata": {
        "id": "view-in-github",
        "colab_type": "text"
      },
      "source": [
        "<a href=\"https://colab.research.google.com/github/Sushmitha-Katti/Artshaala--Frontend/blob/master/tinyimagenet.py\" target=\"_parent\"><img src=\"https://colab.research.google.com/assets/colab-badge.svg\" alt=\"Open In Colab\"/></a>"
      ]
    },
    {
      "cell_type": "code",
      "metadata": {
        "id": "NOqTJJ6QF9kf",
        "colab_type": "code",
        "colab": {}
      },
      "source": [
        "from torch.utils.data import Dataset, random_split\n",
        "from PIL import Image\n",
        "import numpy as np\n",
        "import torch\n",
        "import os\n",
        "import torchvision.transforms as transforms\n",
        "from tqdm import notebook\n",
        "import zipfile\n",
        "import requests\n",
        "from io import StringIO,BytesIO\n",
        "\"\"\"\n",
        "This is used to download the tiny imagenet data set, load them, split to train test , convert to data set format\n",
        "\n",
        "TinyImageNetDataSet - This is the main function which calls all all other. \n",
        "\n",
        "Parameters :\n",
        "\n",
        "train_split : The percent of train data. Default it is 70%\n",
        "test_transforms :Transformations to apply for test data\n",
        "train_transforms : Transformations to apply for train data\n",
        "\n",
        "Return Value : train_set, test_set of type dataset. Which are ready to go in Dataloader\n",
        "\n",
        "Description of How it is implemented : \n",
        "\n",
        "TinyImageNetDataSet is the function which intern calls many funtions\n",
        "\n",
        "1. Download_images - It dowloads the images from the given url and exact the zip file.\n",
        "\n",
        "2. class_names - Derives the classes of tiny- Imagenet.\n",
        "\n",
        "3. TinyImageNet - This returns the complete data of type data set.\n",
        "\n",
        "4. Then we split the data we got from TinyImageNet class into train and test.\n",
        "\n",
        "5. DatasetFromSubset - takes train or test data set and apply given transformations  \n",
        "\n",
        "Finaly trainset, testset are returned.\n",
        "\n",
        "\"\"\"\n",
        "\n",
        "\n",
        "\n",
        "# -----------------------------------------------------Main Function which calls everything--------------------------------------------------------------\n",
        "def TinyImageNetDataSet(train_split = 70,test_transforms = None,train_transforms = None):\n",
        "\n",
        "  down_url  = \"http://cs231n.stanford.edu/tiny-imagenet-200.zip\"\n",
        "  download_images(down_url)\n",
        "  classes = class_names(url = \"tiny-imagenet-200/wnids.txt\")\n",
        "  dataset = TinyImageNet(classes,url=\"tiny-imagenet-200\")\n",
        "  train_len = len(dataset)*train_split//100\n",
        "  test_len = len(dataset) - train_len \n",
        "\n",
        "  train_set, val_set = random_split(dataset, [train_len, test_len])\n",
        "  train_dataset = DatasetFromSubset(train_set, transform=train_transforms)\n",
        "  test_dataset = DatasetFromSubset(val_set, transform=test_transforms)\n",
        "\n",
        "  return train_dataset, test_dataset\n",
        "# train_dataset , test_dataset = TinyImageNetDataSet(train_split = 70,transforms = transforms)\n",
        "\n",
        "\n",
        "# --------------------------------------------------------------Custom data set-------------------------------------------------------------------------\n",
        "\n",
        "class TinyImageNet(Dataset):\n",
        "    def __init__(self,classes,url):\n",
        "        self.data = []\n",
        "        self.target = []\n",
        "        self.classes = classes\n",
        "        self.url = url\n",
        "        \n",
        "        wnids = open(f\"{url}/wnids.txt\", \"r\")\n",
        "        \n",
        "        for wclass in notebook.tqdm(wnids,desc='Loading Train Folder', total = 200):\n",
        "          wclass = wclass.strip()\n",
        "          for i in os.listdir(url+'/train/'+wclass+'/images/'):\n",
        "            img = Image.open(url+\"/train/\"+wclass+\"/images/\"+i)\n",
        "            npimg = np.asarray(img)\n",
        "            \n",
        "            if(len(npimg.shape) ==2):\n",
        "             \n",
        "               npimg = np.repeat(npimg[:, :, np.newaxis], 3, axis=2)\n",
        "            self.data.append(npimg)  \n",
        "            self.target.append(self.classes.index(wclass))\n",
        "\n",
        "        val_file = open(f\"{url}/val/val_annotations.txt\", \"r\")\n",
        "        for i in notebook.tqdm(val_file,desc='Loading Test Folder',total =10000 ):\n",
        "          split_img, split_class = i.strip().split(\"\\t\")[:2]\n",
        "          img = Image.open(f\"{url}/val/images/{split_img}\")\n",
        "          npimg = np.asarray(img)\n",
        "          if(len(npimg.shape) ==2):\n",
        "                    \n",
        "                npimg = np.repeat(npimg[:, :, np.newaxis], 3, axis=2)\n",
        "          self.data.append(npimg)  \n",
        "          self.target.append(self.classes.index(split_class))\n",
        "            \n",
        "    def __len__(self):\n",
        "        return len(self.data)\n",
        "\n",
        "    def __getitem__(self, idx):\n",
        "        data = self.data[idx]\n",
        "        target = self.target[idx]\n",
        "        img = data     \n",
        "        return data,target\n",
        "\n",
        "\n",
        "\n",
        "# ----------------------------------------------------Data subset which comes after splitting--------------------------------------------------\n",
        "\n",
        "class DatasetFromSubset(Dataset):\n",
        "    def __init__(self, subset, transform=None):\n",
        "        self.subset = subset\n",
        "        self.transform = transform\n",
        "\n",
        "    def __getitem__(self, index):\n",
        "        x, y = self.subset[index]\n",
        "        if self.transform:\n",
        "            x = self.transform(x)\n",
        "        return x, y\n",
        "\n",
        "    def __len__(self):\n",
        "        return len(self.subset)\n",
        "\n",
        "# -------------------------------------------------------------------------------------------------------------------------------------------------------\n",
        "\n",
        "def class_names(url = \"tiny-imagenet-200/wnids.txt\"):\n",
        "  f = open(url, \"r\")\n",
        "  classes = []\n",
        "  for line in f:\n",
        "    classes.append(line.strip())\n",
        "  return classes\n",
        "\n",
        "transforms =  transforms.Compose(\n",
        "            [   \n",
        "                transforms.ToTensor(),\n",
        "                transforms.Normalize((0.5, 0.5, 0.5), (0.5, 0.5, 0.5))     \n",
        "                \n",
        "            ])\n",
        "\n",
        "# ---------------------------------------------------Download Images---------------------------------------------------------------------------\n",
        "\n",
        "\n",
        "def download_images(url):\n",
        "\n",
        "    if (os.path.isdir(\"tiny-imagenet-200\")):\n",
        "        print ('Images already downloaded...')\n",
        "        return\n",
        "    r = requests.get(url, stream=True)\n",
        "    print ('Downloading TinyImageNet Data' )\n",
        "    zip_ref = zipfile.ZipFile(BytesIO(r.content))\n",
        "    for file in notebook.tqdm(iterable=zip_ref.namelist(), total=len(zip_ref.namelist())):\n",
        "      zip_ref.extract(member = file)\n",
        "    zip_ref.close()\n",
        "\n",
        "\n",
        "\n",
        "  \n",
        "\n",
        "    "
      ],
      "execution_count": 0,
      "outputs": []
    }
  ]
}