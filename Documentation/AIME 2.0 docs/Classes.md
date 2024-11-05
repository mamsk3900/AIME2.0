# Class Heirarchy 
```
└── SingleNode
    └── AHash
    └── Customer
    └── NodeName
    └── JobNum
    └── Status
    └── VLAN
    └── BMCMAC
    └── BMCIP
    └── MCE
    └── SUM
    └── QA
    └── CPU
        └── Model
        └── MHz
        └── PhysicalCPUs
        └── CoreCount
    └── UsedMem
    └── LoadAvg
    └── Uptime
    └── IPMILogs
    └── Tests
        └── TestParent (wrapper)
            └── Test
            └── Status
            └── StartTime
            └── EndTime
            └── Cycle
            └── Log
                └── Disk
                └── Memory
                └── CPUHPL
                └── GPU
                └── Network
                └── EOD
                └── Cycle
                └── USB
                └── IPMI
                    └── InterfaceType
                    └── SpecVersion
                    └── SlaveAddr
                    └── INVStorage
                    └── BaseAddr
                    └── RegisterSpacing
    └── BOM
        └── BOMSummary
        └── SystemInfo
            └── Manufacturer
            └── Model
            └── Serial
        └── Motherboard
            └── Manufacturer
            └── Model
            └── Serial
        └── CPU
            └── Model
            └── MHz
            └── PhysicalCPUs
            └── CoreCount
        └── BIOS
            └── Vendor
            └── Version
            └── ReleaseDate
        └── MemInfo
            └── TotalMem
            └── DIMMS
                └── Size
                └── Locator
                └── Speed
                └── Manufacturer
                └── SerialNum
                └── PartNum
                └── ConfigedMemSpeed
        └── GPU
            └── Model
        └── StorageDevices
            └── HardDrive
                └── HardDriveMount
                └── Model
                └── Size
                └── Serial
            └── TotalDiskCount
            └── TotalRegularOfSize
        └── StorageControllers
        └── Network
            └── Port1
            └── Port2
            └── Port3
            └── Eth0
            └── Usb
            └── Eth1
        └── Display
        └── PS
        └── IPMI
```
> [!WARNING]
> The BOMSummary class hasn't been created yet but needs to be once I can get the information from the servers
## SingleNode

This is the class that contains all other classes. A single node contains information about the BIOS, BOM, CPU, DIMMs, GPUs, hard drives, IMPI, memory info, motherboard, network, storage devices, system, and tests.

As such the single node class is broken into smaller, child classes for organizational purposes and for making getters and setters.

The parts of the SingleNode class are pretty straight forward.


### CPU

CPU contains information about the model, frequency, number of physical cpus, and the number of cores. 


### Tests

The tests class is a collection of all of the tests that are run on a node. This consists of an array of Tests objs.

### TestParent

This is a class that was constructed purely for the creation of other tests using inheritance rules. The best name for this would be TestWrapper so I'll change it.

### IPMI

This is the class that contains the information for the BMC. It consists of some information that is specified within the tests page but I'm not entirely sure how important that information is.

## BOM
- This class is crazy because it contains so many other classes. This is the main reason I used OOP principles since there is a lot of information that needs to be appropriately organized or else I will lose my mind.
- ### BOMSummary
  - I haven't made this class yet but I will once I can populate the information properly
- ### SystemInfo
  - This contains the information about the chassis
- ### Motherboard 
  - The information about the motherboard in the node
- ### CPU
  - The same information that is in the grandfather SingleNode class
- ### BIOS
  - Gives information about the BIOS that is currently running on the motherboard
- ### MemInfo
  - The list of the DIMMs that are in the system and the total memory that is currently installed
  - ### DIMM
    - Information about the RAM sticks that are currently on the motherboard. There will often be several DIMM objects in a SingleNode
- ### GPU
  - Model information
- ### StorageDevices
  - Information about the hard drive, total disk count, and total of regular size. All of these are strings.
- ### StorageController
  - This is almost always empty in current AIME so it's just an empty string for now.
- ### Network
  - Contains information about the ports including ethernet and USB.
- ### Display
  - Just a string describing the information about the display.
- ### PS
  - I've only ever seen this as "No PS/2 ports found!" but it's possible it is neccessary for something.
- ### IPMI
  - When the BMC is working this shows the Interface type, specification version, slave address, NV storage, base address, and register spacing.

## Those are all of the classes!