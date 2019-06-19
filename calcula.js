window.alert("FUNÇÃO DO 2º GRAU");
   A = window.prompt("INFORME O VALOR DO COEFICIENTE (A) ","");
   B = window.prompt("INFORME O VALOR DO COEFICIENTE (B) ","");
   C = window.prompt("INFORME O VALOR DO COEFICIENTE (C) ","");



   if((A == "") || (A == " "))
   {
      A = 0;
   }
   else if((B == "") || (B == " "))
        {
      B = 0;
        }
        else if ((C == "") || (C == " "))
        {
         C = 0;
        }


   document.write("<P>" + "FÓRMULA DA FUNÇÃO DO 2° GRAU: ax² + bx + c" + "</P>");
   document.write("<P>" + "FÓRMULA DE BÁSKARA OU DELTA : b² -4 * a * c" + "</P>");

   delta = ( (B * B) -(4 * (A) * (C)));
   raiz = Math.sqrt(delta,2);
   x1 = (-B - raiz / (2 * A));
   x2 = (-B + raiz / (2 * A));


   document.write("<P>" + "Valor de A = " + A + "</P>");
   document.write("<P>" + "Valor de B = " + B + "</P>");
   document.write("<P>" + "Valor de C = " + C + "</P>");
   document.write("<P>" + "Delta = " + delta + "</P>");
   document.write("<P>" + "Raiz de Delta = " + Math.round(raiz) + "</P>");
   document.write("<P>" + "VALOR DE X LINHA = " + Math.round(x1) + "</P>");
   document.write("<P>" + "VALOR DE X DUAS LINHAS = " + Math.round(x2) + "</P>");
