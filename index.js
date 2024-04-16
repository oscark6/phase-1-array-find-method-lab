// code your solution here

const record = [
    { year: 2016, result: 'L' },
    { year: 2015, result: 'W' },
    { year: 2014, result: 'L' },
  ];
  
  console.log(superbowlWin(record)); 

  function superbowlWin(record) {
    
    const win = record.find(obj => obj.result === 'W');
  
    
    if (win) {
      return win.year;
    }
  
    
    return undefined;
  }