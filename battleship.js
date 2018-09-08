// Your code here
const kolom = 10;
const baris = 10;
function boardBuild(kolom,baris){
    const abc = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //let hasil = []
    for(let i = 0;i < kolom;i++){
        let isi = []; 
        for(let j = 0;j <= baris;j++){
            if(i === 0){
                if(j === 0){
                    isi.push(' ');
                }else{
                    isi.push(String(j))
                }
            }else{
                if(j === 0){
                    isi.push(abc[i]);
                }else{
                    isi.push(' ')
                }
            }
        }
        console.log(isi)
        
    }
    //return hasil.join('')
}
boardBuild(kolom,baris)