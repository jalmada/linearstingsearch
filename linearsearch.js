

function find(str, seq) {
	return findrec(str, seq, -1);

}

function findrec(str, seq, statepos)
{

	if(statepos == (str.length - 1)){
  	return true;
   }

	if(seq == "" ){
  	return false;
  }
  var nextstatepos =  statepos + 1;
  var currstrchar = str.substring(nextstatepos, nextstatepos + 1);
  var currchar = seq.substring(0, 1);
  var restseq = seq.substring(1);

  document.write(currstrchar + " " + currchar + " " + nextstatepos + "\n");

  var currstatepos = (currstrchar == currchar ? nextstatepos : -1);

  return findrec(str, restseq, currstatepos);
}

var sq = 'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTGATCACATTTTTTTTTTTTTTTTTTTTTTTTTTTA';
var st = 'TA';
var result = find(st, sq);

document.write(result);
