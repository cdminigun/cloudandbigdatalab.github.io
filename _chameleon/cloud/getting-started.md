---
category: Cloud
title: Getting Started
lab: https://www.chameleoncloud.org/login/
video: https://youtu.be/_tiEK2At438
---

{% assign image_path = site.baseurl | append: "/images" | append: page.url %}

## Objectives

In this tutorial, you will learn how to create a Chameleon account and use the Chameleon resource leasing process to create on-demand bare metal servers using the Chameleon user interface.

| \# | Action | Detail | Time (min) |
|----|--------|--------|------------|
| 1 | Register for a Chameleon Cloud account | You will learn how to register for your own Chameleon account, and how to utilize its basic features. | 10 |
| 2 | Chameleon user interface quick overview | To begin, we will walk through the Chameleon user interface capabilities, such as reservation, leasing, server provisioning, private/public IP addresses, networks, and more. | 10 |
| 3 | Create a Chameleon Cloud bare metal server | Lastly, you will learn how to create and log in to a new bare metal instance on Chameleon Cloud using your new Chameleon Cloud account. | 10 |

## Prerequisites

The following prerequisites are expected for successful completion of this tutorial:

-   An SSH client (Windows users can download [PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html))

-   A basic knowledge of Linux

## Step 1: Register for a Chameleon Cloud user account

In this step, you will create your very own Chameleon Cloud user account. However, before we begin, it will be useful to define some Chameleon Cloud terminology and the relationship between these entities. A Chameleon user account, which we will register for below, is required to create projects. A project, in turn, can have any number of other Chameleon users associated with it. As such, users added to a project are known as “project users” for that project. Projects will also have resources, such as a number of bare metal servers, associated with them. Together, these concepts form a hierarchy:

![]({{ image_path | append: "image4.png" }})

To begin, browse to the Chameleon Cloud [homepage](https://www.chameleoncloud.org/).

![]({{ image_path | append: "image5.png" }})

Find and click on the “Users” button located in the upper right-hand corner of the page. Click on “Register” from the pop-up menu that appears.

![]({{ image_path | append: "image6.png" }})

You will be required to complete two sections: “Contact Information” and “Account Information”.

![]({{ image_path | append: "image7.png" }})

When finished, click on “Save Profile”. You will be taken back to the Chameleon Cloud homepage with a message notifying you to check your email for account verification.

![]({{ image_path | append: "image8.png" }})

You should receive an email instructing you to click on a link in order to confirm your email address. Upon doing so, you will be taken to an email confirmation page where you are asked to provide your Chameleon username. After doing so, click on “Verify”.

![]({{ image_path | append: "image9.png" }})

If your information matches, you will receive a message indicating successful verification, and will be directed to login to Chameleon for the first time.

![]({{ image_path | append: "image10.png" }})

Upon successfully logging in, you will be asked to accept the Chameleon User Terms and Conditions. Click “Accept” to proceed.

![]({{ image_path | append: "image11.png" }})

Every time you log in you will be taken to your Dashboard, where you can manage your projects, help desk tickets, as well as your account settings. As we wish to create a new project, click on the “Manage your Projects” button.

![]({{ image_path | append: "image12.png" }})

You will be told you do not currently have any projects. Click the “Create Project” button in the upper right-hand corner of the page to continue.

![]({{ image_path | append: "image13.png" }})

You should then be presented with the Project Lead Terms and Conditions. Click “Accept” to proceed.

![]({{ image_path | append: "image14.png" }})

You will then need to provide a title, description, and type. A Project ID will be automatically generated and assigned – it is displayed on this page for your reference. When you are satisfied with your input, click on “Create Project”.

![]({{ image_path | append: "image15.png" }})

You will then be taken to view the new project’s details. It is on this page that you can add project users. At this point, the project’s “Allocation” status will be reported as “Chameleon *Pending*”. Check in regularly to see when your project’s allocation has been approved.

![]({{ image_path | append: "image16.png" }})

## Step 2: Chameleon user interface quick overview

In this section, we will show you the features of the Chameleon technology preview. The technology preview of Chameleon gives access to bare-metal compute resources on which users can have administrative access to run cloud computing experiments with a high degree of customization and repeatability. Typically, an experiment will go through several phases:

### Reserving resources

Physical resources on the Chameleon technology preview must be reserved before using them for an experiment. Once a reservation has been accepted, users are guaranteed that resources will be available at the time they chose (except in extraordinary circumstances such as hardware or platform failures), which will help to run large scale experiments.

![]({{ image_path | append: "image17.png" }})

You should land on the Compute overview page for your default project. The pie charts on the page will show you what the current usage of things like instances and floating IPs is relative to the limit for your project. The usage summary will show historical usage of your project for a time period that can be selected. The usage box will show information about the instances currently running in your project.

![]({{ image_path | append: "image18.png" }})

To access the reservation system, click on Reservations then Leases.

![]({{ image_path | append: "image19.png" }})

To discover when resources are available, access the lease calendar. This will display a Gantt chart of the reservations which allows you to find when resources are available. The Y axis represents the different physical nodes in the system and the X axis represents time.

![]({{ image_path | append: "image20.png" }})

Once you have chosen a time period when you want to reserve resources, go back to the Leases screen and click on "Create Lease". It should bring up the window displayed below:

![]({{ image_path | append: "image21.png" }})

1. Pick a name for the lease. This name needs to be unique across your project. This example uses the name my-first-lease.

2. Pick a start time; if you want to create your lease soon pick a start time in the near future. Note that it must be entered in UTC! You can get the UTC time by running “date -u” in your terminal.

3. Pick an end time. Similarly, you must use UTC.

4. Choose the number of hosts, it is 1 by default.

5. Click on the “Create” button.

![]({{ image_path | append: "image22.png" }})

Once created the lease details will be displayed. At the bottom of the page are the details about the reservation. Initially the reservation is in the Pending status, and stays in this state until we reach the start time.

![]({{ image_path | append: "image23.png" }})

Once the start time of the lease is reached, the lease will be started and its reservation will change to "Active"; you may need to refresh the page to see this.

![]({{ image_path | append: "image24.png" }})

### Provisioning resources

Once your lease is started, you are almost ready to start an instance. But first, you need to make sure that you will be able to connect to it by setting up a key pair. This only has to be done once per user per project. Go to Project > Compute > Access & Security, then select the Key Pairs tab.

![]({{ image_path | append: "image25.png" }})

Here you can either get OpenStack to create an SSH key pair for you via the "Create Key Pair" button. If you already have an SSH key pair on your machine and are happy to use it, click on "Import Key Pair".

Enter a name for the key pair, for example laptop. In the "Public Key" box, copy the content of your SSH public key. Typically it will be at ~/.ssh/id\_rsa.pub. On Mac OS X, you can run in a terminal:

```sh
cat ~/.ssh/id\_rsa.pub | pbcopy
```

It copies the content of the public key to your copy/paste buffer. Then you can simply paste in the "Public Key" box.

![]({{ image_path | append: "image26.png" }})

Then, click on the blue "Import Key Pair" button. This should show you the list of key pairs, with the one you just added.

![]({{ image_path | append: "image27.png" }})

For those already familiar with OpenStack, note that Security Groups are not currently functioning. All instances are open to the outside world; Security Group rules are not respected. Chameleon staff are working to resolve this bug.

Now, go to the "Instances" panel.

![]({{ image_path | append: "image28.png" }})

Click on the "Launch Instance" button in the top right corner. Select a reservation in the Reservation box, pick an instance name (in this example my-first-instance) and in the Image Name list select our default environment named CC-CentOS7. If you have multiple key pairs registered, you need to select one in the "Access & Security" tab. Finally, click on the blue "Launch" button.

![]({{ image_path | append: "image29.png" }})

The instance will show up in the instance list, at first in Build status. It takes a few minutes to deploy the instance on bare-metal hardware and reboot the machine.

![]({{ image_path | append: "image30.png" }})

After a few minutes the instance should become in “Active” status and the Power State should be “Running.”

![]({{ image_path | append: "image31.png" }})

At this point the instance might still be booting: it might take a minute or two to actually be accessible on the network and accept SSH connections. In the meantime, you can attach a floating IP to the instance. Click on the "Associate Floating IP" button. You should get a screen like the one below:

![]({{ image_path | append: "image32.png" }})

If there are no unused floating IP already allocated to your project, click on the + button. In the window that opens, select the ext-net pool if not already selected by default and click on the blue Allocate IP button.

![]({{ image_path | append: "image33.png" }})

You will be returned to the previous window. The correct value for "Port to be associated" should already be selected, so you only have to click on "Associate".

![]({{ image_path | append: "image34.png" }})

This should send you back to the instance list, where you can see the floating IP attached to the instance.

![]({{ image_path | append: "image35.png" }})

## Step 3: Create a Chameleon Cloud Bare Metal Server

Log in to [Ironic](https://ironic.chameleon.tacc.utexas.edu/dashboard/project/instances/) using the credentials we created previously. Before we begin, we must add or create a key pair to be used to gain access to any servers we create. If you do not presently have a key pair, first click on the “Access & Security” tab, then click on the “Create Key Pair” button.

![]({{ image_path | append: "image36.png" }})

![]({{ image_path | append: "image37.png" }})

![]({{ image_path | append: "image38.png" }})

Enter a name for your new key pair and click on “Create Key Pair”. Your new key public key will then be added to the project automatically, and your private key should begin downloading to your local computer. You should also see the message below.

![]({{ image_path | append: "image39.png" }})

If, instead, you already have a pre-existing key pair you would like to use, you may add your public key to the project by clicking on the “Import Key Pair” button on the “Access & Security” tab.

![]({{ image_path | append: "image40.png" }})

Provide a name for your key pair, and paste your public key into the space provided. Click “Import Key Pair” to continue.

![]({{ image_path | append: "image41.png" }})

If successful, your key pair should now appear in the “Key Pairs” list under the “Access & Security” tab.

Now that we have a valid key pair published, we can proceed with creating a new server. Click on the “Instances” tab, where we can create, manage, and delete servers on demand.

![]({{ image_path | append: "image42.png" }})

Next, click on the “Launch Instance” button.

![]({{ image_path | append: "image43.png" }})

Create a Chameleon server with the following attributes.

1.  Instance name: **test-<your name>**

2.  Availability zone: **Any Availability Zone**

3.  Reservation: **any reservation listed**

4.  Flavor: **baremetal**

5.  Instance count: **1**

6.  Instance boot source: **Boot from image**

7.  Image name: **CC-CentOS7**

8.  Click on the “Access & Security” tab

9.  Select *your key pair* from the list.

10. Click: **Launch**

![]({{ image_path | append: "image44.png" }})

![]({{ image_path | append: "image45.png" }})

The Chameleon Cloud server will begin building. When the server becomes available, click on the “Associate Floating IP” button at the end of its row. Select an available IP address from the list and click on “Associate”. Make note of this new IP address, as we will need it to complete the next step.

![]({{ image_path | append: "image46.png" }})

Now SSH into your new server using the new floating IP address.

```sh
proxyuser@proxy ~$ ssh cc@your.floating.ip.address
The authenticity of host <your.floating.ip.address> can\'t be established.
ECDSA key fingerprint is 3d:4e:d1:a0:e8:d9:e6:19:a2:8a:79:48:66:c5:01:1d.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added <your.floating.ip.address> (ECDSA) to the list of known hosts.
```

Ensure you are logging in using the cc account on any servers you create using this method.
