function generateRandomColor() {
      
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generateColorCodes(number) {

  const colors = [];
  for (let i = 0; i < number; i++) {
      colors.push(generateRandomColor());
  }
  return colors;
}
  const createData = (data)=>{
    const piedata = data?.map((ele)=>({
      x:ele.field,
      y:ele.count,
      label:ele.count
    })).filter((ele)=>ele.y>10) || []
  
    const pieChartColors =  generateColorCodes(piedata.length);
   const legend= piedata.map((ele)=>({name:ele.x}))
    const result = {
      piedata,
      pieChartColors,
      legend
    }
   return result
  }

  export {createData}