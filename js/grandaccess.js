const contractAddress = "0x81dA37F59413989b0B62f54E071a53268e27129b"; // Replace with your deployed contract address
    const contractABI = [
      {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "user",
            type: "address",
          },
        ],
        name: "AccessGranted",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "user",
            type: "address",
          },
        ],
        name: "AccessRevoked",
        type: "event",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_user",
            type: "address",
          },
        ],
        name: "grantAccess",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "string",
            name: "reportId",
            type: "string",
          },
        ],
        name: "NewReportSubmitted",
        type: "event",
      },
      {
        inputs: [
          {
            internalType: "string",
            name: "_reportId",
            type: "string",
          },
        ],
        name: "onlyAllowedReportEvent",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "caller",
            type: "address",
          },
          {
            indexed: false,
            internalType: "string",
            name: "reportId",
            type: "string",
          },
        ],
        name: "OnlyAllowedReportSubmitted",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "string",
            name: "reportId",
            type: "string",
          },
        ],
        name: "ReportReceived",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "string",
            name: "reportId",
            type: "string",
          },
        ],
        name: "ReportSubmitted",
        type: "event",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_user",
            type: "address",
          },
        ],
        name: "revokeAccess",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "string",
            name: "_district",
            type: "string",
          },
          {
            internalType: "string",
            name: "_Area",
            type: "string",
          },
          {
            internalType: "string",
            name: "_title",
            type: "string",
          },
          {
            internalType: "string",
            name: "_description",
            type: "string",
          },
          {
            internalType: "string",
            name: "_photoHash",
            type: "string",
          },
          {
            internalType: "string",
            name: "_videoHash",
            type: "string",
          },
        ],
        name: "submitReport",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "getAddressesWithAccess",
        outputs: [
          {
            internalType: "address[]",
            name: "",
            type: "address[]",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getAllReportIds",
        outputs: [
          {
            internalType: "string[]",
            name: "",
            type: "string[]",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "string",
            name: "_reportId",
            type: "string",
          },
        ],
        name: "getReportById",
        outputs: [
          {
            components: [
              {
                internalType: "string",
                name: "district",
                type: "string",
              },
              {
                internalType: "string",
                name: "Area",
                type: "string",
              },
              {
                internalType: "string",
                name: "title",
                type: "string",
              },
              {
                internalType: "string",
                name: "description",
                type: "string",
              },
              {
                internalType: "string",
                name: "photoHash",
                type: "string",
              },
              {
                internalType: "string",
                name: "videoHash",
                type: "string",
              },
            ],
            internalType: "struct AnonymousReportingSystem.Report",
            name: "",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getTotalContractsDeployed",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ];
    // Create an instance of the contract
const contract = new web3.eth.Contract(contractABI, contractAddress);
// Function to grant access
async function grantAccess(address) {
  try {
      const accounts = await web3.eth.requestAccounts();
      const result = await contract.methods.grantAccess(address).send({ from: accounts[0] });
      console.log(result);
      alert('Access granted successfully!');
  } catch (error) {
      console.error(error);
      alert('Error granting access.');
      alert(error.message);
  }
}

// Listen for form submission
document.getElementById('grantAccessForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const metamaskId = document.getElementById('metamaskId').value;
  grantAccess(metamaskId);
});
