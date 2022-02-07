function int32ToIp(int32){

  let bin = int32.toString(2)

for (i=0;i<32-int32.toString(2).length;i++){
    bin='0'+bin
}
    return `"${parseInt(bin.slice(0,8),2)}.${parseInt(bin.slice(8,16),2)}.${parseInt(bin.slice(16,24),2)}.${parseInt(bin.slice(24,32),2)}"`
}

int32ToIp(2149583361)