import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NFTBridge, NFTBridgeInterface } from "../NFTBridge";
export declare class NFTBridge__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<NFTBridge>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): NFTBridge;
    connect(signer: Signer): NFTBridge__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50613a4e806100206000396000f3fe608060405260043610620001435760003560e01c80639a8a059211620000b9578063c68785191162000078578063c687851914620004b7578063c96616e114620004dc578063d60b347f146200050c578063e6a853e01462000549578063fbe3c2cd146200057d578063fbeeacd9146200059e57600080fd5b80639a8a059214620003d9578063a5799f931462000403578063aa4efa5b1462000428578063ad66a5f1146200045c578063b172b22214620004a057600080fd5b80632b51137511620001065780632b51137514620002b85780632c3c02a414620002ec5780632f3a3d5d14620003205780633ca64826146200034057806384acd1bb14620003b957600080fd5b806301f532551462000148578063150b7a0214620001c65780631a2be4da14620002055780631ff1e2861462000253578063253946451462000291575b600080fd5b3480156200015557600080fd5b506200016d620001673660046200290f565b620005fe565b604051620001bd9190600060a0820190508251825260ff6020840151166020830152604083015161ffff808216604085015280606086015116606085015250506080830151608083015292915050565b60405180910390f35b348015620001d357600080fd5b50620001eb620001e5366004620027bf565b62000806565b6040516001600160e01b03199091168152602001620001bd565b3480156200021257600080fd5b506200024262000224366004620027a2565b6001600160a01b031660009081526008602052604090205460ff1690565b6040519015158152602001620001bd565b3480156200026057600080fd5b50620002786200027236600462002c05565b6200088a565b6040516001600160a01b039091168152602001620001bd565b3480156200029e57600080fd5b50620002b6620002b03660046200290f565b620008b6565b005b348015620002c557600080fd5b50620002dd620002d73660046200290f565b6200099a565b604051620001bd919062002e07565b348015620002f957600080fd5b50620002426200030b366004620028dd565b60009081526004602052604090205460ff1690565b3480156200032d57600080fd5b506001546001600160a01b031662000278565b3480156200034d57600080fd5b506200039d6200035f366004620028dd565b6040805180820190915260008082526020820152506000908152600a6020908152604091829020825180840190935280548352600101549082015290565b60408051825181526020928301519281019290925201620001bd565b348015620003c657600080fd5b506000546001600160a01b031662000278565b348015620003e657600080fd5b5060025461ffff165b60405161ffff9091168152602001620001bd565b3480156200041057600080fd5b50620002b6620004223660046200290f565b62000b70565b3480156200043557600080fd5b506200024262000447366004620028dd565b60009081526005602052604090205460ff1690565b3480156200046957600080fd5b50620004916200047b36600462002bc7565b61ffff1660009081526009602052604090205490565b604051908152602001620001bd565b348015620004ad57600080fd5b5060035462000491565b348015620004c457600080fd5b50620002b6620004d63660046200290f565b62000c76565b620004f3620004ed3660046200285d565b62000c84565b6040516001600160401b039091168152602001620001bd565b3480156200051957600080fd5b50620002426200052b366004620027a2565b6001600160a01b031660009081526006602052604090205460ff1690565b3480156200055657600080fd5b506200056e620005683660046200298f565b62001348565b604051620001bd919062002d9e565b3480156200058a57600080fd5b5060025462010000900461ffff16620003ef565b348015620005ab57600080fd5b50620005c3620005bd3660046200290f565b62001404565b604051620001bd91908151815260208083015160ff169082015260408083015161ffff16908201526060918201519181019190915260800190565b6040805160a081018252600080825260208201819052918101829052606081018290526080810182905290620006358382620015dd565b82526200064460208262002f8d565b8251909150684e465442726964676514620006b25760405162461bcd60e51b815260206004820152602360248201527f696e76616c6964205265676973746572436861696e3a2077726f6e67206d6f64604482015262756c6560e81b60648201526084015b60405180910390fd5b620006be83826200163f565b60ff166020830152620006d360018262002f8d565b9050816020015160ff166001146200073a5760405162461bcd60e51b815260206004820152602360248201527f696e76616c6964205265676973746572436861696e3a2077726f6e672061637460448201526234b7b760e91b6064820152608401620006a9565b6200074683826200169f565b61ffff1660408301526200075c60028262002f8d565b90506200076a83826200169f565b61ffff1660608301526200078060028262002f8d565b90506200078e8382620015dd565b6080830152620007a060208262002f8d565b905080835114620008005760405162461bcd60e51b815260206004820152602360248201527f696e76616c6964205265676973746572436861696e3a2077726f6e67206c656e6044820152620cee8d60eb1b6064820152608401620006a9565b50919050565b60006001600160a01b0386163014620008785760405162461bcd60e51b815260206004820152602d60248201527f63616e206f6e6c792062726964676520746f6b656e7320766961207472616e7360448201526c19995c939195081b595d1a1bd9609a1b6064820152608401620006a9565b50630a85bd0160e11b95945050505050565b61ffff91909116600090815260076020908152604080832093835292905220546001600160a01b031690565b6000806000620008c68462001700565b925092509250818190620008ef5760405162461bcd60e51b8152600401620006a9919062002d9e565b50620009158361014001516000908152600460205260409020805460ff19166001179055565b6000620009268460e0015162001404565b90506200093660025461ffff1690565b61ffff16816040015161ffff1614620009835760405162461bcd60e51b815260206004820152600e60248201526d1ddc9bdb99c818da185a5b881a5960921b6044820152606401620006a9565b606081015162000993906200192f565b5050505050565b604080516101008101825260008082526020820181905291810182905260608082018390526080820183905260a082015260c0810182905260e081018290529080620009e784826200163f565b9050620009f660018362002f8d565b91508060ff1660011462000a405760405162461bcd60e51b815260206004820152601060248201526f34b73b30b634b2102a3930b739b332b960811b6044820152606401620006a9565b62000a4c8483620015dd565b835262000a5b60208362002f8d565b915062000a6984836200169f565b61ffff16602084015262000a7f60028362002f8d565b915062000a8d8483620015dd565b604084015262000a9f60208362002f8d565b915062000aad8483620015dd565b606084015262000abf60208362002f8d565b915062000acd848362001a66565b608084015262000adf60208362002f8d565b915062000aee60018362002f8d565b915062000b1b82602284875162000b06919062002fa8565b62000b12919062002fa8565b86919062001abf565b60a08401528351915062000b3160028362002fa8565b915062000b3f84836200169f565b61ffff1660e084015262000b5560208362002fa8565b915062000b638483620015dd565b60c0840152509092915050565b600080600062000b808462001700565b92509250925081819062000ba95760405162461bcd60e51b8152600401620006a9919062002d9e565b5062000bcf8361014001516000908152600460205260409020805460ff19166001179055565b600062000be08460e00151620005fe565b905062000bf060025461ffff1690565b61ffff16816040015161ffff16148062000c105750604081015161ffff16155b62000c515760405162461bcd60e51b815260206004820152601060248201526f1a5b9d985b1a590818da185a5b881a5960821b6044820152606401620006a9565b620009938160600151826080015161ffff909116600090815260096020526040902055565b62000c818162001bd8565b50565b600080600062000cac886001600160a01b031660009081526008602052604090205460ff1690565b1562000da657876001600160a01b0316639a8a05926040518163ffffffff1660e01b815260040160206040518083038186803b15801562000cec57600080fd5b505afa15801562000d01573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000d27919062002be6565b9150876001600160a01b0316633d6c043b6040518163ffffffff1660e01b815260040160206040518083038186803b15801562000d6357600080fd5b505afa15801562000d78573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000d9e9190620028f6565b905062000f70565b60025461ffff166040516301ffc9a760e01b81526380ac58cd60e01b60048201529092506001600160a01b038916915081906301ffc9a79060240160206040518083038186803b15801562000dfa57600080fd5b505afa15801562000e0f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000e359190620028c0565b62000e8d5760405162461bcd60e51b815260206004820152602160248201527f6d75737420737570706f7274207468652045524337323120696e7465726661636044820152606560f81b6064820152608401620006a9565b6040516301ffc9a760e01b8152635b5e139f60e01b60048201526001600160a01b038916906301ffc9a79060240160206040518083038186803b15801562000ed457600080fd5b505afa15801562000ee9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000f0f9190620028c0565b62000f705760405162461bcd60e51b815260206004820152602a60248201527f6d75737420737570706f727420746865204552433732312d4d657461646174616044820152691032bc3a32b739b4b7b760b11b6064820152608401620006a9565b60608060608461ffff16600114620010ca5760408051600481526024810182526020810180516001600160e01b03166395d89b4160e01b17905290516000916001600160a01b038e169162000fc6919062002c7e565b600060405180830381855afa9150503d806000811462001003576040519150601f19603f3d011682016040523d82523d6000602084013e62001008565b606091505b5060408051600481526024810182526020810180516001600160e01b03166306fdde0360e01b1790529051919350600092506001600160a01b038f169162001051919062002c7e565b600060405180830381855afa9150503d80600081146200108e576040519150601f19603f3d011682016040523d82523d6000602084013e62001093565b606091505b5091505081806020019051810190620010ad919062002959565b945080806020019051810190620010c5919062002959565b935050505b60008b6001600160a01b03168b604051602401620010ea91815260200190565b60408051601f198184030181529181526020820180516001600160e01b031663c87b56dd60e01b1790525162001121919062002c7e565b600060405180830381855afa9150503d80600081146200115e576040519150601f19603f3d011682016040523d82523d6000602084013e62001163565b606091505b50915050808060200190518101906200117d919062002959565b9150506000808661ffff1660011415620011fa57604080518082018252600080825260209182018190528e8152600a82528281208351808501909452805484526001015491830191909152906020810151815190945092509050620011f38d6000908152600a6020526040812081815560010155565b5062001207565b5050602083810151908301515b604051632142170760e11b8152336004820152306024820152604481018d90526001600160a01b038e16906342842e0e90606401600060405180830381600087803b1580156200125657600080fd5b505af11580156200126b573d6000803e3d6000fd5b505050506200127d60025461ffff1690565b61ffff168761ffff1614620012e957604051630852cd8d60e31b8152600481018d90526001600160a01b038e16906342966c6890602401600060405180830381600087803b158015620012cf57600080fd5b505af1158015620012e4573d6000803e3d6000fd5b505050505b620013376040518061010001604052808881526020018961ffff1681526020018481526020018381526020018e81526020018581526020018c81526020018d61ffff16815250348b62001fbc565b9d9c50505050505050505050505050565b606060c88260a00151511115620013ad5760405162461bcd60e51b815260206004820152602260248201527f746f6b656e555249206d757374206e6f74206578636565642032303020627974604482015261657360f01b6064820152608401620006a9565b81516020808401516040808601516060870151608088015160a0890151805160c08b015160e08c01519651620013ee9a60019a909998939493910162002ccf565b6040516020818303038152906040529050919050565b604080516080810182526000808252602082018190529181018290526060810182905290620014348382620015dd565b82526200144360208262002f8d565b8251909150684e465442726964676514620014af5760405162461bcd60e51b815260206004820152602560248201527f696e76616c69642055706772616465436f6e74726163743a2077726f6e67206d6044820152646f64756c6560d81b6064820152608401620006a9565b620014bb83826200163f565b60ff166020830152620014d060018262002f8d565b9050816020015160ff16600214620015395760405162461bcd60e51b815260206004820152602560248201527f696e76616c69642055706772616465436f6e74726163743a2077726f6e67206160448201526431ba34b7b760d91b6064820152608401620006a9565b6200154583826200169f565b61ffff1660408301526200155b60028262002f8d565b9050620015698382620015dd565b60608301526200157b60208262002f8d565b905080835114620008005760405162461bcd60e51b815260206004820152602560248201527f696e76616c69642055706772616465436f6e74726163743a2077726f6e67206c6044820152640cadccee8d60db1b6064820152608401620006a9565b6000620015ec82602062002f8d565b83511015620016365760405162461bcd60e51b8152602060048201526015602482015274746f427974657333325f6f75744f66426f756e647360581b6044820152606401620006a9565b50016020015190565b60006200164e82600162002f8d565b83511015620016965760405162461bcd60e51b8152602060048201526013602482015272746f55696e74385f6f75744f66426f756e647360681b6044820152606401620006a9565b50016001015190565b6000620016ae82600262002f8d565b83511015620016f75760405162461bcd60e51b8152602060048201526014602482015273746f55696e7431365f6f75744f66426f756e647360601b6044820152606401620006a9565b50016002015190565b604080516101608101825260008082526020820181905291810182905260608082018390526080820183905260a0820183905260c0820183905260e082018190526101008201839052610120820152610140810191909152600060606000806000620017746000546001600160a01b031690565b6001600160a01b031663c0fd8bde886040518263ffffffff1660e01b8152600401620017a1919062002d9e565b60006040518083038186803b158015620017ba57600080fd5b505afa158015620017cf573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620017f9919081019062002a58565b9250925092508162001812579194509250905062001928565b60025462010000900461ffff1661ffff16836060015161ffff1614620018705750506040805180820190915260168152753bb937b7339033b7bb32b93730b731b29031b430b4b760511b602082015290935060009250905062001928565b600354836080015114620018c357505060408051808201909152601981527f77726f6e6720676f7665726e616e636520636f6e747261637400000000000000602082015290935060009250905062001928565b61014083015160009081526004602052604090205460ff16156200190d57826000604051806060016040528060228152602001620039f76022913995509550955050505062001928565b50506040805160208101909152600081529093506001925090505b9193909250565b6000620019637f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b9050620019708262002071565b60408051600481526024810182526020810180516001600160e01b031663204a7f0760e21b179052905160009182916001600160a01b03861691620019b59162002c7e565b600060405180830381855af49150503d8060008114620019f2576040519150601f19603f3d011682016040523d82523d6000602084013e620019f7565b606091505b509150915081819062001a1f5760405162461bcd60e51b8152600401620006a9919062002d9e565b50836001600160a01b0316836001600160a01b03167f2e4cc16c100f0b55e2df82ab0b1a7e294aa9cbd01b48fbaf622683fbc0507a4960405160405180910390a350505050565b600062001a7582602062002f8d565b83511015620016365760405162461bcd60e51b8152602060048201526015602482015274746f55696e743235365f6f75744f66426f756e647360581b6044820152606401620006a9565b60608162001acf81601f62002f8d565b101562001b105760405162461bcd60e51b815260206004820152600e60248201526d736c6963655f6f766572666c6f7760901b6044820152606401620006a9565b62001b1c828462002f8d565b8451101562001b625760405162461bcd60e51b8152602060048201526011602482015270736c6963655f6f75744f66426f756e647360781b6044820152606401620006a9565b60608215801562001b83576040519150600082526020820160405262001bcf565b6040519150601f8416801560200281840101858101878315602002848b0101015b8183101562001bbe57805183526020928301920162001ba4565b5050858452601f01601f1916604052505b50949350505050565b600080600062001bf06000546001600160a01b031690565b6001600160a01b031663c0fd8bde856040518263ffffffff1660e01b815260040162001c1d919062002d9e565b60006040518083038186803b15801562001c3657600080fd5b505afa15801562001c4b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405262001c75919081019062002a58565b92509250925081819062001c9e5760405162461bcd60e51b8152600401620006a9919062002d9e565b5062001caa83620020b3565b62001cea5760405162461bcd60e51b815260206004820152600f60248201526e34b73b30b634b21032b6b4ba3a32b960891b6044820152606401620006a9565b600062001cfb8460e001516200099a565b905062001d1c84610140015160009081526005602052604090205460ff1690565b1562001d6b5760405162461bcd60e51b815260206004820152601a60248201527f7472616e7366657220616c726561647920636f6d706c657465640000000000006044820152606401620006a9565b62001d908461014001516000908152600560205260409020805460ff19166001179055565b60025461ffff1661ffff168160e0015161ffff161462001dea5760405162461bcd60e51b815260206004820152601460248201527334b73b30b634b2103a30b933b2ba1031b430b4b760611b6044820152606401620006a9565b600062001dfa60025461ffff1690565b61ffff16826020015161ffff16141562001e175750805162001e62565b600062001e2d836020015184600001516200088a565b90506001600160a01b03811662001e5f5762001e5c8360200151846000015185606001518660400151620020f0565b90505b90505b60c082015160025461ffff1661ffff16836020015161ffff161462001f4157826020015161ffff166001141562001ecd576080830151604080518082018252606086015181528186015160208083019182526000948552600a90529190922091518255516001909101555b608083015160a08401516040516334ff261960e21b81526001600160a01b0385169263d3fc98649262001f07928692919060040162002d75565b600060405180830381600087803b15801562001f2257600080fd5b505af115801562001f37573d6000803e3d6000fd5b5050505062001fb3565b6080830151604051632142170760e11b81523060048201526001600160a01b0383811660248301526044820192909252908316906342842e0e90606401600060405180830381600087803b15801562001f9957600080fd5b505af115801562001fae573d6000803e3d6000fd5b505050505b50505050505050565b60008062001fca8562001348565b905062001fdf6000546001600160a01b031690565b6001600160a01b031663b19a437e858584600f6040518563ffffffff1660e01b8152600401620020129392919062002e85565b6020604051808303818588803b1580156200202c57600080fd5b505af115801562002041573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019062002068919062002c33565b95945050505050565b6200207c816200239d565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60008160800151620020d9836060015161ffff1660009081526009602052604090205490565b1415620020e857506001919050565b506000919050565b60006200210060025461ffff1690565b61ffff168561ffff1614156200216a5760405162461bcd60e51b815260206004820152602860248201527f63616e206f6e6c79207772617020746f6b656e732066726f6d20666f726569676044820152676e20636861696e7360c01b6064820152608401620006a9565b60006200217886866200088a565b6001600160a01b031614620021d05760405162461bcd60e51b815260206004820152601c60248201527f7772617070656420617373657420616c726561647920657869737473000000006044820152606401620006a9565b8461ffff166001141562002212577f576f726d686f6c65204272696467656420536f6c616e612d4e4654000000000092506915d3d49354d41313919560b21b91505b6000627ce50b60e31b620022268562002444565b620022318562002444565b3089896040516024016200224a95949392919062002db3565b60408051601f19818403018152918152602080830180516001600160e01b03166001600160e01b031990951694909417909352519092506000916200229491309185910162002d4f565b6040516020818303038152906040529050600060405180602001620022b9906200257f565b601f1982820381018352601f909101166040819052620022df9190849060200162002c9c565b60408051601f19818403018152908290526001600160f01b031960f08b901b166020830152602282018990529150600090604201604051602081830303815290604052805190602001209050808251602084016000f59450843b6200234357600080fd5b61ffff891660009081526007602090815260408083208b8452825280832080546001600160a01b0319166001600160a01b038a16908117909155835260089091529020805460ff1916600117905550505050949350505050565b803b620024035760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401620006a9565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b606060005b6020811080156200248757508281602081106200247657634e487b7160e01b600052603260045260246000fd5b1a60f81b6001600160f81b03191615155b15620024a25780620024998162002ff5565b91505062002449565b6000816001600160401b03811115620024cb57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015620024f6576020820181803683370190505b50905060005b8281101562002577578481602081106200252657634e487b7160e01b600052603260045260246000fd5b1a60f81b8282815181106200254b57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350806200256e8162002ff5565b915050620024fc565b509392505050565b610993806200306483390190565b6000620025a46200259e8462002f63565b62002f30565b9050828152838383011115620025b957600080fd5b828260208301376000602084830101529392505050565b80356001600160a01b0381168114620025e857600080fd5b919050565b600082601f830112620025fe578081fd5b815160206001600160401b038211156200261c576200261c62003029565b6200262c818360051b0162002f30565b80838252828201915082860187848660071b89010111156200264c578586fd5b855b85811015620026b857608080838b03121562002668578788fd5b6200267262002eb9565b83518152868401518782015260406200268d81860162002790565b908201526060620026a085820162002790565b9082015285529385019391909101906001016200264e565b5090979650505050505050565b80518015158114620025e857600080fd5b600082601f830112620026e7578081fd5b8151620026f86200259e8262002f63565b8181528460208386010111156200270d578283fd5b6200272082602083016020870162002fc2565b949350505050565b600082601f83011262002739578081fd5b6200274a838335602085016200258d565b9392505050565b8035620025e8816200303f565b8051620025e8816200303f565b8051620025e88162003050565b80516001600160401b0381168114620025e857600080fd5b805160ff81168114620025e857600080fd5b600060208284031215620027b4578081fd5b6200274a82620025d0565b600080600080600060808688031215620027d7578081fd5b620027e286620025d0565b9450620027f260208701620025d0565b93506040860135925060608601356001600160401b038082111562002815578283fd5b818801915088601f83011262002829578283fd5b81358181111562002838578384fd5b8960208285010111156200284a578384fd5b9699959850939650602001949392505050565b600080600080600060a0868803121562002875578283fd5b6200288086620025d0565b945060208601359350604086013562002899816200303f565b9250606086013591506080860135620028b28162003050565b809150509295509295909350565b600060208284031215620028d2578081fd5b6200274a82620026c5565b600060208284031215620028ef578081fd5b5035919050565b60006020828403121562002908578081fd5b5051919050565b60006020828403121562002921578081fd5b81356001600160401b0381111562002937578182fd5b8201601f8101841362002948578182fd5b62002720848235602084016200258d565b6000602082840312156200296b578081fd5b81516001600160401b0381111562002981578182fd5b6200272084828501620026d6565b600060208284031215620029a1578081fd5b81356001600160401b0380821115620029b8578283fd5b908301906101008286031215620029cd578283fd5b620029d762002ee4565b82358152620029e96020840162002751565b602082015260408301356040820152606083013560608201526080830135608082015260a08301358281111562002a1e578485fd5b62002a2c8782860162002728565b60a08301525060c083013560c082015262002a4a60e0840162002751565b60e082015295945050505050565b60008060006060848603121562002a6d578081fd5b83516001600160401b038082111562002a84578283fd5b90850190610160828803121562002a99578283fd5b62002aa362002f0a565b62002aae8362002790565b815262002abe602084016200276b565b602082015262002ad1604084016200276b565b604082015262002ae4606084016200275e565b60608201526080830151608082015262002b0160a0840162002778565b60a082015262002b1460c0840162002790565b60c082015260e08301518281111562002b2b578485fd5b62002b3989828601620026d6565b60e08301525061010062002b4f8185016200276b565b90820152610120838101518381111562002b67578586fd5b62002b758a828701620025ed565b91830191909152506101408381015190820152945062002b9860208701620026c5565b9350604086015191508082111562002bae578283fd5b5062002bbd86828701620026d6565b9150509250925092565b60006020828403121562002bd9578081fd5b81356200274a816200303f565b60006020828403121562002bf8578081fd5b81516200274a816200303f565b6000806040838503121562002c18578182fd5b823562002c25816200303f565b946020939093013593505050565b60006020828403121562002c45578081fd5b6200274a8262002778565b6000815180845262002c6a81602086016020860162002fc2565b601f01601f19169290920160200192915050565b6000825162002c9281846020870162002fc2565b9190910192915050565b6000835162002cb081846020880162002fc2565b83519083019062002cc681836020880162002fc2565b01949350505050565b600060ff60f81b808d60f81b1683528b600184015261ffff60f01b808c60f01b1660218501528a6023850152896043850152886063850152818860f81b1660838501528651915062002d29826084860160208a0162002fc2565b920160848101949094525060f09190911b1660a482015260a60198975050505050505050565b6001600160a01b0383168152604060208201819052600090620027209083018462002c50565b60018060a01b038416815282602082015260606040820152600062002068606083018462002c50565b6020815260006200274a602083018462002c50565b60a08152600062002dc860a083018862002c50565b828103602084015262002ddc818862002c50565b6001600160a01b03969096166040840152505061ffff92909216606083015260809091015292915050565b60208152815160208201526000602083015161ffff80821660408501526040850151606085015260608501516080850152608085015160a085015260a085015191506101008060c086015262002e6261012086018462002c50565b925060c086015160e08601528160e0870151168186015250508091505092915050565b63ffffffff8416815260606020820152600062002ea6606083018562002c50565b905060ff83166040830152949350505050565b604051608081016001600160401b038111828210171562002ede5762002ede62003029565b60405290565b60405161010081016001600160401b038111828210171562002ede5762002ede62003029565b60405161016081016001600160401b038111828210171562002ede5762002ede62003029565b604051601f8201601f191681016001600160401b038111828210171562002f5b5762002f5b62003029565b604052919050565b60006001600160401b0382111562002f7f5762002f7f62003029565b50601f01601f191660200190565b6000821982111562002fa35762002fa362003013565b500190565b60008282101562002fbd5762002fbd62003013565b500390565b60005b8381101562002fdf57818101518382015260200162002fc5565b8381111562002fef576000848401525b50505050565b60006000198214156200300c576200300c62003013565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b61ffff8116811462000c8157600080fd5b63ffffffff8116811462000c8157600080fdfe608060405234801561001057600080fd5b5060405161099338038061099383398101604081905261002f9161048e565b818161005c60017fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d51610599565b60008051602061094c8339815191521461008657634e487b7160e01b600052600160045260246000fd5b6100928282600061009b565b505050506105fe565b6100a483610175565b6040516001600160a01b038416907f1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e90600090a26000825111806100e55750805b156101705761016e836001600160a01b0316635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561012657600080fd5b505afa15801561013a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061015e9190610474565b8361031560201b6100291760201c565b505b505050565b6101888161034160201b6100551760201c565b6101e75760405162461bcd60e51b815260206004820152602560248201527f455243313936373a206e657720626561636f6e206973206e6f74206120636f6e6044820152641d1c9858dd60da1b60648201526084015b60405180910390fd5b61026a816001600160a01b0316635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561022357600080fd5b505afa158015610237573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061025b9190610474565b61034160201b6100551760201c565b6102cf5760405162461bcd60e51b815260206004820152603060248201527f455243313936373a20626561636f6e20696d706c656d656e746174696f6e206960448201526f1cc81b9bdd08184818dbdb9d1c9858dd60821b60648201526084016101de565b806102f460008051602061094c83398151915260001b61034760201b61005b1760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b606061033a838360405180606001604052806027815260200161096c6027913961034a565b9392505050565b3b151590565b90565b6060833b6103a95760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084016101de565b600080856001600160a01b0316856040516103c4919061054a565b600060405180830381855af49150503d80600081146103ff576040519150601f19603f3d011682016040523d82523d6000602084013e610404565b606091505b50909250905061041582828661041f565b9695505050505050565b6060831561042e57508161033a565b82511561043e5782518084602001fd5b8160405162461bcd60e51b81526004016101de9190610566565b80516001600160a01b038116811461046f57600080fd5b919050565b600060208284031215610485578081fd5b61033a82610458565b600080604083850312156104a0578081fd5b6104a983610458565b60208401519092506001600160401b03808211156104c5578283fd5b818501915085601f8301126104d8578283fd5b8151818111156104ea576104ea6105e8565b604051601f8201601f19908116603f01168101908382118183101715610512576105126105e8565b8160405282815288602084870101111561052a578586fd5b61053b8360208301602088016105bc565b80955050505050509250929050565b6000825161055c8184602087016105bc565b9190910192915050565b60208152600082518060208401526105858160408501602087016105bc565b601f01601f19169190910160400192915050565b6000828210156105b757634e487b7160e01b81526011600452602481fd5b500390565b60005b838110156105d75781810151838201526020016105bf565b8381111561016e5750506000910152565b634e487b7160e01b600052604160045260246000fd5b61033f8061060d6000396000f3fe60806040523661001357610011610017565b005b6100115b61002761002261005e565b610106565b565b606061004e83836040518060600160405280602781526020016102e36027913961012a565b9392505050565b3b151590565b90565b60006100917fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50546001600160a01b031690565b6001600160a01b0316635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156100c957600080fd5b505afa1580156100dd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610101919061023c565b905090565b3660008037600080366000845af43d6000803e808015610125573d6000f35b3d6000fd5b6060833b61018e5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084015b60405180910390fd5b600080856001600160a01b0316856040516101a99190610263565b600060405180830381855af49150503d80600081146101e4576040519150601f19603f3d011682016040523d82523d6000602084013e6101e9565b606091505b50915091506101f9828286610203565b9695505050505050565b6060831561021257508161004e565b8251156102225782518084602001fd5b8160405162461bcd60e51b8152600401610185919061027f565b60006020828403121561024d578081fd5b81516001600160a01b038116811461004e578182fd5b600082516102758184602087016102b2565b9190910192915050565b602081526000825180602084015261029e8160408501602087016102b2565b601f01601f19169190910160400192915050565b60005b838110156102cd5781810151838201526020016102b5565b838111156102dc576000848401525b5050505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220c383d12a666085db2eac57ee60d62a29e11c165ef3006d3555601869d9b9b8eb64736f6c63430008040033a3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564676f7665726e616e636520616374696f6e20616c726561647920636f6e73756d6564a264697066735822122011db301b8b6af9ebd589a2da7315d5336d3a09cacd779f83239bbb91ec9b4ba264736f6c63430008040033";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): NFTBridgeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): NFTBridge;
}
