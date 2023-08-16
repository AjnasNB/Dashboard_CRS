// Import the Web3.js library
// Replace the 'web3' import path with the correct location of the Web3.js library in your project
import Web3 from 'web3';

// Your smart contract ABI (Application Binary Interface) and contract address
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
]
const contractAddress = '0x81dA37F59413989b0B62f54E071a53268e27129b'; // Replace with your actual contract address

// Initialize Web3
let web3;

// Check if Web3 is already available in the browser
if (window.ethereum) {
  web3 = new Web3(window.ethereum);
  try {
    // Request account access if needed
    await window.ethereum.enable();
  } catch (error) {
    // User denied account access...
    console.error("User denied account access");
  }
} else if (window.web3) {
  // Legacy dapp browsers...
  web3 = new Web3(window.web3.currentProvider);
} else {
  // Non-dapp browsers...
  console.error("Non-Ethereum browser detected. You should consider trying MetaMask!");
}

// Connect to the smart contract instance
const contractInstance = new web3.eth.Contract(contractABI, contractAddress);

// Function to create a notification element
function createNotification(title, time) {
  // Same as before
}

// Function to display the notification and manage the notification count
function showNotification(title, time) {
  // Same as before
}

// Function to fetch report submission events from the smart contract
async function fetchReportSubmissionEvents() {
  const events = await contractInstance.getPastEvents('ReportSubmitted', {
    fromBlock: 0,
    toBlock: 'latest'
  });

  events.forEach(event => {
    const reportId = event.returnValues.reportId;
    const timestamp = event.returnValues.timestamp * 1000; // Convert to milliseconds
    const formattedTime = new Date(timestamp).toLocaleString();
    showNotification(`New report submitted: ${reportId}`, formattedTime);
  });
}

// Fetch report submission events when the page loads
window.onload = async function() {
  await fetchReportSubmissionEvents();
};

// Example: Poll for new report submission events every 10 seconds
setInterval(async () => {
  await fetchReportSubmissionEvents();
}, 10000);
