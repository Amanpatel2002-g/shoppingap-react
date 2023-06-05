const CURRENCY_FORMATOR = new Intl.NumberFormat(undefined, {currency:"USD", style:"currency"});

export function formatCurrency(number:number){
    return CURRENCY_FORMATOR.format(number)
}