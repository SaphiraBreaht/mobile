<template>
    <Page>
        <ActionBar title="Calculator" />
        <TabView height="100%">
            <TabViewItem>
                <StackLayout backgroundColor="false" width="100%" height="100%">
                    <GridLayout columns="*,*,*,*" rows="*,*,*,*,*,*" width="100%">
						<Label textWrap="true" v-model="result" row="0" col="0" colSpan="4"/>/>
						<Button class="clean" @tap="clean()" text="AC" row="1" col="0" colSpan="2"/>
						<Button class="back" @tap="del()" text="DEL" row="1" col="2" colSpan="2"/>
						<Button class="znak" @tap="input('7')" text="7" row="2" col="0"/> 
						<Button class="znak" @tap="input('8')" text="8" row="2" col="1"/>
						<Button class="znak" @tap="input('9')" text="9" row="2" col="2"/>
						<Button @tap="input('*')" text="*" row="2" col="3"/>
						<Button class="znak" @tap="input('4')" text="4" row="3" col="0"/>
						<Button class="znak" @tap="input('5')" text="5" row="3" col="1"/>
						<Button class="znak" @tap="input('6')" text="6" row="3" col="2"/>
						<Button @tap="input('/')" text="/" row="3" col="3"/>
						<Button class="znak" @tap="input('1')" text="1" row="4" col="0"/>
						<Button class="znak" @tap="input('2')" text="2" row="4" col="1"/>
						<Button class="znak" @tap="input('3')" text="3" row="4" col="2"/>
						<Button @tap="input('-')" text="-" row="4" col="3"/>
						<Button @tap="input('.')" text="." row="5" col="0"/>
						<Button class="znak" @tap="input('0')" text="0" row="5" col="1"/>
						<Button class="equal" @tap="equal()" text="=" row="5" col="2"/>
						<Button @tap="input('+')" text="+" row="5" col="3"/>
                    </GridLayout>
                </StackLayout>
            </TabViewItem>
        </TabView>
    </Page>
</template>
<script>
	let invalid = 'invalid input';
	let operation = false; 
    let point = false;
    export default {
        data() {
            return {
                result: '',
            }
        },
        methods: {
            input: function(char) {
				 this.result = this.result.toString(); 
                 if (this.result === invalid){ 
                     this.result = ''; 
                } 
                if ((char === '+' || char === '/' || char === '-' || char === '*') && operation === false){
                    operation = true; 
                    point = false; 
                    this.result += char; 
                }
				else if ((char === '0' || char === '1' || char === '2' || char === '3' || char === '4' || 
                          char === '5' || char === '6' || char === '7' || char === '8' || char === '9')){ 
                    operation = false; 
                    this.result += char; 
                }
				else if(char === '.' && point === false){ 
                    operation = true; 
                    point = true; 
                    this.result += char; 
                }
            },
			clean: function() {
                this.result = "";
            },
            del: function() {
                this.result = this.result.toString();
                this.result = this.result.slice(0, -1);
            },
			 equal: function() {
                this.result = eval(this.result);
            }
        }
    };
</script>
