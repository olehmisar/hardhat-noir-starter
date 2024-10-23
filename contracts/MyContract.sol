// contracts/MyContract.sol
import {UltraVerifier} from "../noir/target/my_noir.sol";

contract MyContract {
    UltraVerifier public verifier = new UltraVerifier();

    function verify(
        bytes calldata proof,
        uint256 y
    ) external view returns (bool) {
        bytes32[] memory publicInputs = new bytes32[](1);
        publicInputs[0] = bytes32(y);
        bool result = verifier.verify(proof, publicInputs);
        return result;
    }
}
