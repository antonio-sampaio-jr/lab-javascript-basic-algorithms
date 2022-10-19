// Iteration 1: Names and Input
let hacker1 = "Antonio"; 
console.log("The driver's name is "+hacker1);
let tamanho_hk1 = hacker1.length;
let hacker2 = "Bruno";
let tamanho_hk2 = hacker2.length;
console.log("The navigator's name is "+hacker2);
// Iteration 2: Conditionals
if (tamanho_hk1 > tamanho_hk2)
    console.log("The driver has the longest name, it has "+tamanho_hk1+ " characters.");
else if (tamanho_hk1 < tamanho_hk2)    
    console.log("It seems that the navigator has the longest name, it has "+tamanho_hk2+ " characters.");
else
    console.log("Wow, you both have equally long names, "+tamanho_hk1+ "characters!");    
// Iteration 3: Loops
let nome_hacker1 = hacker1[0].toUpperCase()+" ";
for(let i =1; i < tamanho_hk1; i++)
    nome_hacker1 += hacker1[i].toUpperCase()+" ";
console.log(nome_hacker1);
let nome_hacker2 = hacker2[tamanho_hk2-1];
for(i =tamanho_hk2-2; i >=0; i--)
    nome_hacker2 += hacker2[i];
console.log(nome_hacker2);

if (tamanho_hk1 > tamanho_hk2)
{
    for(i=0; i < tamanho_hk2; i++)
    {
        if(hacker1[i] > hacker2[i])
        {
            console.log("The driver's name goes first.");
            break;
        }    
        else if(hacker1[i] < hacker2[i])
        {
            console.log("Yo, the navigator goes first definitely.");
            break;
        }
        else
            continue;
    }   
}     
else if (tamanho_hk1 < tamanho_hk2)    
{
    for(i=0; i < tamanho_hk2; i++)
    {
        if(hacker2[i] > hacker1[i])
        {
            console.log("Yo, the navigator goes first definitely.");
            break;
        }
        else if(hacker2[i] < hacker1[i])
        {
            console.log("The driver's name goes first.");
            break;
        }
        else
            continue;
    }
}    
else if (tamanho_hk1 === tamanho_hk2)
{
    let ok = 0;
    for(i=0; i < tamanho_hk2; i++)
    {
        if(hacker1[i] > hacker2[i])
        {
            console.log("The driver's name goes first.");
            ok = 1;
            break;
        }    
        else if (hacker1[i] < hacker2[i])
        {
            console.log("Yo, the navigator goes first definitely.");
            ok = 1;
            break;
        }
        else
            continue;     
    }
    if (ok === 0)
        console.log("What?! You both have the same name?");
}  


