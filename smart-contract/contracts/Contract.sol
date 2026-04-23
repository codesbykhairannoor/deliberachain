// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ChainVault {

    enum Status { Active, Hidden, Resolved }

    struct Aspiration {
        uint256 id;
        string cid;         // IPFS CID containing description/evidence
        string title;       // Title of aspiration
        string category;    // Topic category
        address owner;      // Submitter
        uint256 timestamp;
        Status status;
        uint256 upvotes;
    }

    address public admin;
    uint256 public aspirationCount;
    mapping(uint256 => Aspiration) public aspirations;
    mapping(address => uint256[]) private userAspirations;
    mapping(uint256 => mapping(address => bool)) public hasUpvoted;

    event AspirationSubmitted(uint256 indexed id, address indexed owner, string title, string category);
    event AspirationStatusChanged(uint256 indexed id, Status newStatus);
    event AspirationUpvoted(uint256 indexed id, address voter, uint256 totalUpvotes);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Not authorized: Admin only");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function submitAspiration(string memory _cid, string memory _title, string memory _category) public {
        require(bytes(_cid).length > 0, "CID cannot be empty");

        uint256 newId = aspirationCount;
        
        aspirations[newId] = Aspiration({
            id: newId,
            cid: _cid,
            title: _title,
            category: _category,
            owner: msg.sender,
            timestamp: block.timestamp,
            status: Status.Active,
            upvotes: 0
        });

        userAspirations[msg.sender].push(newId);
        aspirationCount++;

        emit AspirationSubmitted(newId, msg.sender, _title, _category);
    }

    function upvote(uint256 _id) public {
        require(_id < aspirationCount, "Aspiration does not exist");
        require(aspirations[_id].status == Status.Active, "Cannot upvote hidden or resolved aspirations");
        require(!hasUpvoted[_id][msg.sender], "Already upvoted");

        hasUpvoted[_id][msg.sender] = true;
        aspirations[_id].upvotes++;

        emit AspirationUpvoted(_id, msg.sender, aspirations[_id].upvotes);
    }

    function setStatus(uint256 _id, Status _status) public onlyAdmin {
        require(_id < aspirationCount, "Aspiration does not exist");
        aspirations[_id].status = _status;
        emit AspirationStatusChanged(_id, _status);
    }

    function getAllAspirations() public view returns (Aspiration[] memory) {
        Aspiration[] memory all = new Aspiration[](aspirationCount);
        for (uint256 i = 0; i < aspirationCount; i++) {
            all[i] = aspirations[i];
        }
        return all;
    }
    
    function getUserAspirations(address _user) public view returns (Aspiration[] memory) {
        uint256[] memory ids = userAspirations[_user];
        Aspiration[] memory userAsp = new Aspiration[](ids.length);
        for (uint256 i = 0; i < ids.length; i++) {
            userAsp[i] = aspirations[ids[i]];
        }
        return userAsp;
    }
}