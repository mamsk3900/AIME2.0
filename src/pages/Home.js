import React from 'react';
import DataTable from "../Components/DataTable"
import AppBar from "../Components/AppBar";
import { useState, useEffect } from 'react';
import { SingleNode } from '../Classes/SingleNode';
import {CPU} from '../Classes/CPU';
import { TestParent } from '../Classes/TestParent';
import { BOM } from '../Classes/BOM';
import { System } from '../Classes/System';
import { MemInfo } from '../Classes/MemInfo';
import {DIMM} from '../Classes/DIMM';
import {StorageDevice} from '../Classes/StorageDevice';
import {Tests} from '../Classes/Tests';
import {Motherboard} from '../Classes/Motherboard';
import {BIOS} from '../Classes/BIOS';
import {IPMI} from '../Classes/IPMI';
import { HardDrive } from '../Classes/HardDrive';
import { Network } from '../Classes/Network';


function Home() {
  const [singleNode, setSingleNode] = useState([]);
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);

  function createSingleNode() {
    console.log("fdsf")
    const singleNode1 = new SingleNode("c1", "P&G", "node1", "123", "Idle", "0.0.0.0.1", "0.0.0.0.2", "0.0.0.0.3", "OK", "OK", false, createCPU(), "2952 MB", "0.54, 0.39, 0.36", "0 days, 0 hours, 32 minutes", "IPMI Log", createTests(), createBOM());
    return singleNode1;
  }

  function createCPU() {
    const CPU1 = new CPU("AMD Epyc", "2700 MHZ", "2", "64");
    return CPU1;
  }
  
    function createTests() {
      const testArray = createTestsParentClass();
  
      const Tests1 = new Tests(testArray[0], testArray[1], testArray[2], testArray[3], testArray[4], testArray[5], testArray[6], testArray[7], testArray[8], testArray[9])
      return Tests1;
    }

  function createTestsParentClass() {
    const testArrayNames = ["Disk", "Memory", "CPUHPL", "GPU", "Network", "EOD", "Cycle", "USB", "CDROM", "IPMI"];
    const testArray = [];

    for (var i = 0; i < testArrayNames.length; i++) {
      testArray.push(new TestParent(testArrayNames, "Status", "StartTime", "EndTime", "Cycles", "Log"));
    }
    return testArray;

  }

  function createNetwork() {
    const network1 = new Network("01:00.0 Infiniband controller: Mellanox Technologies MT2910 Family [ConnectX-7]", " 02:00.0 Ethernet controller: Intel Corporation Ethernet Controller X710 for 10GBASE-T (rev 02)", " 02:00.1 Ethernet controller: Intel Corporation Ethernet Controller X710 for 10GBASE-T (rev 02)",
       "eth0: connected to eth0 Intel X710 ethernet (i40e), A0:36:BC:CA:D2:E5, hw, port a036bccad2e5, mtu 1500 ip4 default inet4 172.19.213.209/16 route4 default via 172.19.255.254 metric 0	route4 172.19.0.0/16 metric 0	route4 172.19.0.0/16 metric 100	route4 default via 172.19.255.254 metric 100",
       "usb0: disconnected American Megatrends Virtual Ethernet. 1 connection available	ethernet (cdc_ether), 2E:10:96:9C:E9:DE, hw, mtu 1500", 
      "eth1: unavailable Intel X710	ethernet (i40e), A0:36:BC:CA:D2:E6, hw, port a036bccad2e6, mtu 1500");
      return network1;
  }

  function createBOM() {
    const BOM1 = new BOM("Summary", createSystem(), createMotherboard(), createCPU(), createBIOS(), createMemInfo(), "GPU", createStorageDevice(), "Storage Controller",  createNetwork, "Display", "None found!", createIPMI() ) //might need to make a class for GPU, Network
    return BOM1; 
  }

  function createSystem() {
    const system1 = new System("ASUS", "RS720QA-E12-RS8U", "R5S0MD0003SH");
    return system1;
  }

  function createMotherboard() {
    const motherboard1 = new Motherboard("ASUSTeK COMPUTER INC. ", "K14PH-D24", "230418594500075");
    return motherboard1;
  }

  function createBIOS() {
    const BIOS1 = new BIOS("American Megatrends Inc. ", "0303 ", "03/03/2023 ");
    return BIOS1;
  }

  function createMemInfo() {
    const MemInfo1 = new MemInfo("755.6 GB", createDIMMList());
    return MemInfo1;
  }

  function createDIMMList() {
    const DIMMList = [];
    const DIMM1 = new DIMM("32 GB", "CPU1_DIMM_A1", "4800 MT/s", "Kingston", "40177E8F", "9965791-087.A00G", "4800 MT/s");
    for (var i = 0; i < 23; i++) {
      DIMMList.push(DIMM1);
    }

    return DIMMList;
  }

  function createStorageDevice() {
    const HardDrive1 = createHardDrive(); 
    const storageDevice1 = new StorageDevice(HardDrive1, "Regular/USB = 0  NVME = 1  CD/DVD = 1480 GB", "Total NVME of size 447.1G = 1") //this is going to need a subclass of harddrive
    return storageDevice1;
  }

  function createHardDrive() {
    const hardDrive1 = new HardDrive("/dev/nvme01", "KINGSTON SEDC1000BM8480G", "480 GB", "50026B7686D2BC38");
    return hardDrive1;
  }

  function createIPMI() {
    const IPMI1 = new IPMI("KCS (Keyboard Control Style)", "2.0", "0x10", "0", "0x0000000000000CA2 (I/O)", "Successive Byte Boundaries");
    return IPMI1;
  }

  useEffect(() => { 
    setSingleNode(createSingleNode());
    setRows([
    { id: 1, A: singleNode.getAHash,Customer: singleNode.getCustomer, NodeName: singleNode.getNodeName, JobNum: singleNode.getJobNum, Status: singleNode.getStatus, VLAN: singleNode.getVLAN, BMCMAC: singleNode.getBMCMAC, BMCIP: singleNode.getBMCIP, MCE: singleNode.getMCE, SUM: singleNode.getSUM }, //still needs work
    { id: 2, A: "c2", Customer: "P&G", NodeName: "node2", JobNum: "123", Status: "Idle", VLAN: "0.0.0.0.0", BMCMAC: "0.0.0.0.0", BMCIP: "0.0.0.0.0", MCE: "OK", SUM: "OK" },
  ])
  setColumns([
    { field: 'A', headerName: 'A#(WEB)', width: 115, flex: 0, headerAlign: "center", align: "center", headerClassName: 'super-app-theme--header' },
    { field: 'Customer', headerName: 'Customer', flex: 1, headerAlign: "center", align: "center", headerClassName: 'super-app-theme--header' },
    { field: 'NodeName', headerName: 'NodeName', editable: true, flex: 1, headerAlign: "center", align: "center", headerClassName: 'super-app-theme--header' },
    { field: 'JobNum', headerName: 'Job/RMA#', editable: true, type: 'number', flex: 1, headerAlign: "center", align: "center", headerClassName: 'super-app-theme--header' },
    { field: 'Status', headerName: 'Status', flex: 1, headerAlign: "center", align: "center", headerClassName: 'super-app-theme--header' },
    { field: 'VLAN', headerName: 'VLAN', flex: 1, headerAlign: "center", align: "center", headerClassName: 'super-app-theme--header'},
    { field: 'BMCMAC', headerName: 'BMCMAC', flex: 1, headerAlign: "center", align: "center", headerClassName: 'super-app-theme--header' },
    { field: 'BMCIP', headerName: 'BMCIP', flex: 1, headerAlign: "center", align: "center", headerClassName: 'super-app-theme--header' },
    { field: 'MCE', headerName: 'MCE/EDAC', flex: 1, headerAlign: "center", align: "center", headerClassName: 'super-app-theme--header' },
    { field: 'SUM', headerName: 'SUM', flex: 1, headerAlign: "center", align: "center", headerClassName: 'super-app-theme--header' },
  ])});
  
  
  useEffect(() => {
    document.title = "AIME 2.0";
  }, [])

  return (
    <div className="Home">
      <AppBar id="AppBar"/>
      <DataTable rows={rows} columns={columns} title={"AIME Control Table"} />
    </div>
  );
}

export default Home;
