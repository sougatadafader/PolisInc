'use strict';

const errors = require('../errors');

const solve = function(expression) {
  /* your code here  */
 var ret = '';
 	if( expression == '' )
	{
		ret = 'Argument Length is 0';
		throw new errors.ExpressionParserError(ret);
		return ret;
	}

	if( !isNaN( expression ) )
	{
		ret = 'Type Error';
		throw TypeError();
		return ret;
	}

	var numbers = ['']; //Store all the individual numbers
	var operators = []; //Store all the individual operators
	var operatorPr = [];//Store all the individual operator priority based on priority value
	var operatorsCopy = [];//Store all operator and its priority in object format
	var priority = { '/':4,'*':3,'+':2,'-':1 }; //Maintain a priority value for each operator
	var nIndex = 0;
	var oIndex = 0;
	var spaceZone = false;
	var charType = 0;
	for( var i=0;i<expression.length;i++ )
	{
		var chr = expression.charAt( i );
		var asciiVal = expression.charCodeAt( i );
		if( ( asciiVal >= 48 && asciiVal <= 57 ) || ( chr == '+' || chr == '-' || chr == '*' || chr == '/' || chr == ' ' ) )
		{
			if( asciiVal >= 48 && asciiVal <= 57 )
			{
				if( spaceZone && charType == 1 )
				{
					ret = 'Numeric proceeded by Numeric';
					throw new errors.ExpressionParserError(ret);
					return ret;
				}
				charType = 1;
				spaceZone  = false;
				numbers[nIndex] += chr;
			}
			else
			{
				
				if( chr == ' ' )
				{
					spaceZone = true;
					continue;
				}
				charType = 2;
				spaceZone = false;
				if( numbers[nIndex].length == 0 )
				{

					ret = 'Operator not preceeded by numeric';
					throw new errors.ExpressionParserError(ret);
					return ret;
				}
				operators.push( chr );
				operatorsCopy.push( {chr:chr,index:oIndex} );
				operatorPr.push( priority[chr] );
				numbers.push( '' );
				nIndex++;
				oIndex++;
			}
		}
		else
		{
			ret = 'Expression has non-numeric string';
			throw new errors.ExpressionParserError(ret);
			return ret;
		}
	}
	if( numbers[numbers.length-1] == '' )
	{
		ret = 'Operator not proceeded by numeric';
		throw new errors.ExpressionParserError(ret);
		return ret;
	}
	for( var i = 0;i<operators.length;i++ )
	{
		for( var j = 0;j<operators.length-i;j++ )
		{
			if( operatorPr[j] < operatorPr[j+1] )
			{
				var temp = operatorPr[j];
				operatorPr[j] = operatorPr[j+1];
				operatorPr[j+1] = temp;
				var tempChr = operatorsCopy[j];
				operatorsCopy[j] = operatorsCopy[j+1];
				operatorsCopy[j+1] = tempChr;
			}
		}
	}

	while( operators.length > 0 )
	{
		var currentOperator = operatorsCopy[0];
		var index = currentOperator.index;
		var op1 = parseInt( numbers[index] );
		var op2 = parseInt( numbers[index+1] );
		var res = op1;
		var operator = operators[index];
		if( operator == '+' )
		{
			res = op1+op2;
		}
		else if( operator == '-' )
		{
			res = op1-op2;
		}
		else if( operator == '*' )
		{
			res = op1*op2;
		}
		else if( operator == '/' )
		{
			res = op1/op2;
		}
		numbers[index] = res;
		numbers.splice( index+1,1 );
		operators.splice( index,1 );
		for( var i=1;i<operatorsCopy.length;i++ )
		{
			var thisIndex = operatorsCopy[i].index;
			if( thisIndex > index )
			{
				operatorsCopy[i].index = thisIndex-1;
			}
		}
		operatorsCopy.splice( 0,1 );
	}
	ret = numbers[0];
	console.log( operatorsCopy );
	return ret;
	//console.log( numbers );
};

module.exports = {
    solve: solve
};
