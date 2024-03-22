function culculateNetSalary(){
    const basicSalary = 50000
    const benefits = 10000
    const monthlyTaxablePay = 24000
    const rateOfTax = 0.10
    const NHIFDeduction = 750
    const NSSFDeductionRate = 0.06
    // culculate grossSalary
    const grossSalary = basicSalary +benefits

    //  culculate payee 
    const Tax = monthlyTaxablePay *  rateOfTax
    // NSSF deductions 
    const NSSFDeduction = grossSalary * NSSFDeductionRate
    
    // culculate Net Salary
    const netSalary = grossSalary - Tax - NHIFDeduction - NSSFDeduction;

    return {
        Tax,
        grossSalary,
        NSSFDeduction,
        netSalary,
        NHIFDeduction


    }
    
}    
console.log(culculateNetSalary());