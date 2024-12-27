const hash_func = (input)=>{
  return '*' + input + '*';
} 


class My_Block{
  constructor(data, hash, lasthash) {
    this.data = data;
    this.hash = hash;
    this.lasthash = lasthash;
  }
}

class Blockchain{
  constructor(){
    const genesis = new My_Block('gen-data', 'gen-hash', 'gen-lasthash');
    this.chain = [genesis];
  }


  addBlock(data){
    const lastHash = this.chain[this.chain.length - 1].hash;
    const hash = hash_func(data + lastHash);
    const block = new My_Block(data, hash, lastHash);
    this.chain.push(block);
  }
}
const fooBlockchain = new Blockchain();

fooBlockchain.addBlock('one')
fooBlockchain.addBlock('two')
fooBlockchain.addBlock('three')

console.log(fooBlockchain);
