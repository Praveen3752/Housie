$(document).ready(function()
	{
		$(".numberBallons").parent().hide();
		$("#maindiv").hide();
	});

	function fun()
	{
		$("#maindiv").show();
		$(".numberBallons").parent().show();
		for(var i=0;i<3;i++)
		{
			for(var j=0;j<9;j++)
			{
				$(".rowsdata").eq(i).children().eq(j).text("");
			}
		}

		var count = 0;
		var boolarr = [true,false];
		var outputarr = [];
		var rowdata = [0,1,2];
		var numberdata = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90];

		while(count < 15)
		{
			for(var i=0;i<9;i++)
			{
				if(count >= 15)
				{
					break;
				}

				var boolvar = boolarr[Math.floor(Math.random() * boolarr.length)];
				if(boolvar)
				{
					var rowvar = rowdata[Math.floor(Math.random() * rowdata.length)];
					var temparr = numberdata.slice(i*10,(i*10)+9);
					var printdata = temparr[Math.floor(Math.random() * temparr.length)];

					while(printdata == 0)
					{
						printdata = temparr[Math.floor(Math.random() * temparr.length)];
					}

					if($(".rowsdata").eq(rowvar).children().eq(i).text() == "")
					{
						var gotocheck = 0;
						var rr = rowvar;
						for(var b=0;b<3;b++)
						{
							var temp1 = $(".rowsdata").eq(b).children().eq(i).text();
							var temp2 = Number($(".rowsdata").eq(b).children().eq(i).text());

							if((temp1 != "" && rr < b && printdata > temp2) || (temp1 != "" && rr > b && printdata < temp2))
							{
								gotocheck = 1;
								break;
							}

						}
						if(gotocheck == 1)
						{
							continue;
						}

						var tempcount = 0;

						for(var t=0;t<$(".rowsdata").eq(rowvar).children().length;t++)
						{
							if($(".rowsdata").eq(rowvar).children().eq(t).text() != "")
							{
								tempcount = tempcount + 1;
							}
						}

						if(tempcount >= 5)
						{
							continue;
						}

						$(".rowsdata").eq(rowvar).children().eq(i).text(printdata);
						
						var nullindex = numberdata.indexOf(printdata);
						numberdata[nullindex] = 0;
						//outputarr.push(printdata);

						count = count + 1;

					}

				}
			}
		}
		
	}
