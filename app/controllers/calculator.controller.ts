import { Calculator } from "../models/calculator.js"
//controller
export class CalculatorController {
        private inputDay: HTMLInputElement
        private inputMonth: HTMLInputElement
        private inputYear: HTMLInputElement

        private showYear: HTMLElement
        private showMonth: HTMLElement
        private showDay: HTMLElement

        private divDay: HTMLElement
        private divMonth: HTMLElement
        private divYear: HTMLElement

        private formList: HTMLElement

        constructor(){
            this.inputDay = document.querySelector('#day') as HTMLInputElement
            this.inputMonth = document.querySelector('#month') as HTMLInputElement
            this.inputYear = document.querySelector('#year') as HTMLInputElement
            
            this.showYear = document.querySelector('#years') as HTMLElement
            this.showMonth = document.querySelector('#months') as HTMLElement
            this.showDay = document.querySelector('#days') as HTMLElement

            this.divDay = document.querySelector('.divDay') as HTMLElement
            this.divMonth = document.querySelector('.divMonth') as HTMLElement
            this.divYear = document.querySelector('.divYear') as HTMLElement

            this.formList = document.querySelector('.form-list') as HTMLElement
        }

        print(): void{
            const calculator = this.calcDates()
        }

        calcDates(): Calculator{
            const today = new Date()
            const year = parseInt(this.inputYear.value)
            const month = parseInt(this.inputMonth.value)
            const day = parseInt(this.inputDay.value)

            //condições para validação do formulário
            const daysOfMonth = new Date(year, month, 0).getDate()
            const lastYear = new Date().getFullYear()

            if(!day || !month || !year){
                this.divDay.textContent = 'This field is required'
                this.divMonth.textContent = 'This field is required'
                this.divYear.textContent = 'This field is required'
                this.formList.style.color = 'red'
                this.inputDay.style.border = '2px solid red'
                this.inputMonth.style.border = '2px solid red'
                this.inputYear.style.border = '2px solid red'

            }else if(day > daysOfMonth || !day){
                this.divDay.textContent = 'Must be a valid day'
                this.inputDay.focus()
                this.divYear.textContent = ''
                this.divMonth.textContent = ''
                this.formList.style.color = 'red'
                this.inputDay.style.border = '2px solid red'
                
            }else if(month > 12 || !month){
                this.divMonth.textContent = 'Must be a valid month'
                this.inputMonth.focus()
                this.divDay.textContent = ''
                this.divYear.textContent = ''
                this.formList.style.color = 'red'
                this.inputMonth.style.border = '2px solid red'
                
            }else if(year > lastYear || !year){
                this.divYear.textContent = 'Must be in the past'
                this.inputYear.focus()
                this.divMonth.textContent = ''
                this.divDay.textContent = ''
                this.formList.style.color = 'red'
                this.inputYear.style.border = '2px solid red'
                
            }else if(day > daysOfMonth && month > 12 && year > lastYear){
                this.divDay.textContent = 'Must be a valid day'
                this.divMonth.textContent = 'Must be a valid month'
                this.divYear.textContent = 'Must be in the past'
            }else{
                this.divDay.textContent = ''
                this.divMonth.textContent = ''
                this.divYear.textContent = ''
                this.formList.style.color = 'gray'
                this.inputDay.style.border = '2px solid gray'
                this.inputMonth.style.border = '2px solid gray'
                this.inputYear.style.border = '2px solid gray'

                //mostra a idade em dias, mês e ano
                if(month < today.getMonth()){
                
                    const calcYear = String(Math.abs(today.getFullYear() - year))
                    const calcMonth = String(Math.abs((today.getMonth() + 1) - month))
                    const calcDay = String(Math.abs(today.getDate() - day))

                    this.showYear.textContent = calcYear
                    this.showMonth.textContent = calcMonth
                    this.showDay.textContent = calcDay

                }else{
                    const calcYear = String(Math.abs((today.getFullYear() - 1) - year))
                    const calcMonth = String(Math.abs((today.getMonth() + 1) - month))
                    const calcDay = String(Math.abs(today.getDate() - day))

                    this.showYear.textContent = calcYear
                    this.showMonth.textContent = calcMonth
                    this.showDay.textContent = calcDay
                }
            }
        
            return new Calculator(day, month, year)

        }
}