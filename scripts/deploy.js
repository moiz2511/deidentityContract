//imports
const {ethers, network}=require('hardhat')

//async main
async function main() { 
  const DeIdentityFactory=await ethers.getContractFactory(
    'DeIdentity'
  )
  console.log('Deploying contract .......')
  const DeIdentity=await DeIdentityFactory.deploy()
  await DeIdentity.deployed()
  console.log(`Deployed contract to ${DeIdentity.address}`)
  if(network.config.chainId==5){
    await DeIdentity.deployTransaction.wait(6)
    await verify(DeIdentity.address,[])
  }
  else{
    console.log('no')
  }
}
async function verify(contractAddress,args){
  console.log('verifying contract.........')
  try{

    await run('verify:verify',{
      address: contractAddress,
      constructorArguments:args
    })
  }catch(e){
    if(e.message.toLowerCase().includes("already verified")){
     console.log("Already Verified") 
    }
    else{
      console.log(e)
    }
  }
  }

//call main
main()
  .then(() => process.exit(0))
  .catch((error)=>{
    console.log(error)
    process.exit(1)
  })