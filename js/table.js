// // Function to update the report data on the page
// import CryptoJS from "crypto-js";
const KEY='62aee9049843d4979d9c55a2909981429cd3ca2234fbbb6595bd0cd27d95a017f3663ec5add807e8da44d2098801d370e56b0ba6d03431696feb19b4225d596d4ebb78a412b76971c0f2957ed35133c637612fa89a9c5d7c61c636c98a98150d514ab6322cd5a8d24db85ff9f1988de9cd657a88b510ec241b8d3de4a3d4d6edc953658d5a8b8de9627f7d50062503a9197d1bbbfc94b129d044661248ec0102184753b4cd02c30c70b0ff972ebaa1bd30bc66cb9261e1e153c5cba5739094b9a79d53ca80ccb10d661d5bf2564bd07212e80a4d58ae41866069520b7d5883151d51a5c11055266bd0866d1ce974b6f492f013fb7b2370979afd91bbe1a8fa91'
const decryptData = (data) => {
  try {
    console.log('Encrypted data:', data); // Check the encrypted data
    // Decrypt the data using AES algorithm and secret key
    const decryptedBytes = CryptoJS.AES.decrypt(data, KEY);
    const decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);
    console.log('Decrypted data:', decryptedText); // Check the decrypted data
    return decryptedText;
  } catch (error) {
    console.error('Error decrypting data:', error);
    return '';
  }
};
function updateReportData(report) {
  document.getElementById("district").innerText = "District: " + decryptData(report.district);
  document.getElementById("area").innerText = "Area: " + decryptData(report.Area);
  document.getElementById("title").innerText = "Title: " + decryptData(report.title);
  document.getElementById("description").innerText = "Description: " + decryptData(report.description);
  document.getElementById("videoSource").src =  decryptData(report.videoHash);
  document.getElementById("photo").src =  decryptData(report.photoHash);
  
}

// Function to fetch all report IDs from the smart contract
async function getAllReportIds() {
  const contractAddress = "0x81dA37F59413989b0B62f54E071a53268e27129b"; // Replace with the deployed contract address
  const contractABI = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "AccessGranted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "AccessRevoked",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "grantAccess",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "reportId",
          "type": "string"
        }
      ],
      "name": "NewReportSubmitted",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_reportId",
          "type": "string"
        }
      ],
      "name": "onlyAllowedReportEvent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "caller",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "reportId",
          "type": "string"
        }
      ],
      "name": "OnlyAllowedReportSubmitted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "reportId",
          "type": "string"
        }
      ],
      "name": "ReportReceived",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "reportId",
          "type": "string"
        }
      ],
      "name": "ReportSubmitted",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "revokeAccess",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_district",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_Area",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_title",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_description",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_photoHash",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_videoHash",
          "type": "string"
        }
      ],
      "name": "submitReport",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAddressesWithAccess",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllReportIds",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_reportId",
          "type": "string"
        }
      ],
      "name": "getReportById",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "district",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "Area",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "title",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "photoHash",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "videoHash",
              "type": "string"
            }
          ],
          "internalType": "struct AnonymousReportingSystem.Report",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTotalContractsDeployed",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ] // Replace with the contract's ABI

  // Check if MetaMask is installed and accessible
  if (typeof window.ethereum === "undefined" || !window.ethereum.isMetaMask) {
    alert("Please install MetaMask to use this application.");
    return;
  }

  // Connect to the Ethereum network through MetaMask
  const web3 = new Web3(window.ethereum);

  // Set the default account (the currently selected account in MetaMask)
  await window.ethereum.enable();

  const contract = new web3.eth.Contract(contractABI, contractAddress);
  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];
  try {
    const reportIds = await contract.methods.getAllReportIds().call({ from: account });
    return reportIds;
  } catch (error) {
    console.error("Error fetching report IDs:", error);
  }
}

// Function to fetch report data by ID from the smart contract
async function getReportById(reportId) {
  const contractAddress = "0x81dA37F59413989b0B62f54E071a53268e27129b"; // Replace with the deployed contract address
  const contractABI =[
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "AccessGranted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "AccessRevoked",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "grantAccess",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "reportId",
          "type": "string"
        }
      ],
      "name": "NewReportSubmitted",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_reportId",
          "type": "string"
        }
      ],
      "name": "onlyAllowedReportEvent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "caller",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "reportId",
          "type": "string"
        }
      ],
      "name": "OnlyAllowedReportSubmitted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "reportId",
          "type": "string"
        }
      ],
      "name": "ReportReceived",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "reportId",
          "type": "string"
        }
      ],
      "name": "ReportSubmitted",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "revokeAccess",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_district",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_Area",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_title",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_description",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_photoHash",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_videoHash",
          "type": "string"
        }
      ],
      "name": "submitReport",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAddressesWithAccess",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllReportIds",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_reportId",
          "type": "string"
        }
      ],
      "name": "getReportById",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "district",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "Area",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "title",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "photoHash",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "videoHash",
              "type": "string"
            }
          ],
          "internalType": "struct AnonymousReportingSystem.Report",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTotalContractsDeployed",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ] // Replace with the contract's ABI

  // Connect to the Ethereum network through MetaMask
  const web3 = new Web3(window.ethereum);

  // Set the default account (the currently selected account in MetaMask)
  await window.ethereum.enable();

  const contract = new web3.eth.Contract(contractABI, contractAddress);
  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];
  try {
    const report = await contract.methods.getReportById(reportId).call({from: account});
    return report;
  } catch (error) {
    console.error("Error fetching report data:", error);
  }
}

// Function to populate the report select dropdown
async function populateReportSelect() {
  const reportSelect = document.getElementById("reportSelect");
  reportSelect.innerHTML = "<option value='' disabled selected>Select a report</option>";

  const reportIds = await getAllReportIds();

  reportIds.forEach(reportId => {
    const option = document.createElement("option");
    option.value = reportId;
    option.innerText = reportId;
    reportSelect.appendChild(option);
  });
}

// Function to handle report selection
async function handleReportSelection() {
  const selectedReportId = document.getElementById("reportSelect").value;
  if (!selectedReportId) {
    return;
  }

  const report = await getReportById(selectedReportId);
  updateReportData(report);
}

// Add event listener to handle report selection changes
document.getElementById("reportSelect").addEventListener("change", handleReportSelection);

// Initialize the page
populateReportSelect();
