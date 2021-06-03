let flag = true;
var vue = new Vue(
    {
        el: '#calculator',
        data: {
            result: '',
            operations: ["+","-","*","/"],
            numbers: [1,2,3,4,5,6,7,8,9,0],   
        },
        methods: {
            input: function(char){
                this.result = this.result.toString();
                this.result+= char;  
                flag = true;      
            },

            clear: function(){
                this.result = "";
                flag = true;
            },

            del: function(){
                this.result = this.result.toString();
                this.result = this.result.slice(0,- 1);
            },

            calculate: function(){
                this.result = eval(this.result);
            },

            point: function(){
                if(flag === true){
                    this.result = this.result.toString();
                    this.result += '.';
                    flag = false}
            },
            
            op: function(char){
                flag = true;
                this.result = this.result.toString();
                if(this.result.slice(-1) === '+' || this.result.slice(-1) === '-' || this.result.slice(-1) === '*' || this.result.slice(-1) === '/'){
                    if (this.result.slice(-1) === '+')
                        this.result = this.result.slice(0, -1) + char;
                    else if (this.result.slice(-1) === '-')
                        this.result = this.result.slice(0, -1) + char;
                    else if (this.result.slice(-1) === '*')
                        this.result = this.result.slice(0, -1) + char;
                    else if (this.result.slice(-1) === '/')
                        this.result = this.result.slice(0, -1) + char;
                    else {
                        this.result = this.result.toString();
                        this.result += char;
                    }  
                } else{
                    this.result = this.result.toString();
                    this.result += char;
                }
            },
        }
    }
)