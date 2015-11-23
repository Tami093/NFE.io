#Test: Calculating withheld taxes
#Introduction 
	A big part of our work on NFe.io is to help our customers (services providers) to calculate how much in taxes they will have to pay to the Government and do the procedures to open your’s business (companies) too.
When a company (service provider) has adopted the assumed profit (lucro presumido) tax regime on accounting, the company needs to calculate the following taxes to be retained (withheld) by the customer when the invoice is issued. That's a mecanism from the Government to guarantee that the tax will be paid. 
	So, when a company wants to issue a service invoice to its customer, depending on the total amount of the invoice, the company will need to calculate the tax to be withhold by the customer. The withheld taxes to be calculated are IR, PIS, COFINS, CSLL. 
The IR is only withheld by the customer when the IR amount is greater than R$ 10. And the PIS, COFINS, CSLL (PCC) are only withheld if the invoice amount is greater than R$ 5000. This logic is described bellow. 

#Domain dictionary 
bCompany: is the legal entity that will provide services and by that will need to issue the Invoices of the provided services to their Customers. 

Customer: is a legal entity or a person that will borrow a service from a Company. The Customer must receive and Invoice for each service that borrow from the Company and, depending on the amount of the service, the Invoice will have Taxes to be Withheld. 

Invoice: is the legal document issue by the Company to inform the Government about the provided service to a Customer and inform the Customer about the Taxes Withheld. 


Calculation logic references 
		IF [Invoice Amount] * [IR Withhold Tax Rate] > 10 
		[IR Amount Withheld] = [Invoice Amount] * [IR Withhold Tax Rate] 
		IF [Invoice Amount] > 5000 
		[PIS Amount Withheld] = [Invoice Amount] * [PIS Withhold Tax Rate] 
		[COFINS Amount Withheld] = [Invoice Amount] * [COFINS Withhold Tax Rate] 
		[CSLL Amount Withheld] = [Invoice Amount] * [CSLL Withhold Tax Rate] 
#Task requirements 
* All stories to be completed with an appropriate level of testing. 
* No actual database implementation is required, feel free to stub it out. 
* Your code should trend towards being DDD, SOLID. 
* You should commit all your code to a GIT repository. 
* Send us a link to your GIT repository to gabriel@conube.com.br 
#Story 01 
	AS a company that provides services. 
	I want to know the total amount of the following withhold taxes: IR, PIS, COFINS, CSLL. 
	That way I know how much money will be discounted when a customer pays my invoice. 
#Story 02 
	AS a system administrator (accountant). 
	I want to be able to change the withhold tax rates for IR, PIS, COFINS, CSLL. 
	That way I don't need to change the code when the tax rate changes. 
#Story 03 
	AS a company that provide services. 
	I want to see the amounts withheld rounded correctly to 2 decimal places. 
T	hat way I will not be confused about how much will be discounted from my payment. 


