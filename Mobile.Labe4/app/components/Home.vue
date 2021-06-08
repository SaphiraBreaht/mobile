<template>
    <Page>
        <ActionBar title="Calculator" />
        <TabView height="100%">
            <TabViewItem>
                <StackLayout backgroundColor="false" width="100%" height="100%">
                    <GridLayout columns="*,*,*,*" rows="*,*,*,*,*,*" width="100%">
						<Label textWrap="true" hint='0' v-model="result" row="0" col="0" colSpan="4"/>/>
						<Button @tap="clean()" text="AC" row="1" col="0" colSpan="2"/>
						<Button @tap="del()" text="DEL" row="1" col="2" colSpan="2"/>
						<Button @tap="inputNum('7')" text="7" row="2" col="0"/> 
						<Button @tap="inputNum('8')" text="8" row="2" col="1"/>
						<Button @tap="inputNum('9')" text="9" row="2" col="2"/>
						<Button @tap="inputNum('*')" text="*" row="2" col="3"/>
						<Button @tap="inputNum('4')" text="4" row="3" col="0"/>
						<Button @tap="inputNum('5')" text="5" row="3" col="1"/>
						<Button @tap="inputNum('6')" text="6" row="3" col="2"/>
						<Button @tap="inputNum('/')" text="/" row="3" col="3"/>
						<Button @tap="inputNum('1')" text="1" row="4" col="0"/>
						<Button @tap="inputNum('2')" text="2" row="4" col="1"/>
						<Button @tap="inputNum('3')" text="3" row="4" col="2"/>
						<Button @tap="inputNum('-')" text="-" row="4" col="3"/>
						<Button @tap="inputNum('.')" text="." row="5" col="0"/>
						<Button @tap="inputNum('0')" text="0" row="5" col="1"/>
						<Button @tap="equal()" text="=" row="5" col="2"/>
						<Button @tap="inputNum('+')" text="+" row="5" col="3"/>
                    </GridLayout>
                </StackLayout>
            </TabViewItem>
        </TabView>
    </Page>
</template>

<script>
const op = ['+','-','*','/'];
const num = [1,2,3,4,5,6,7,8,9,0]
    export default {
        data() {
            return {
                result: '',
            }
        },
        methods: {
            inputNum: function (char) {
                this.result = this.result.toString();
                if(op.includes(char)){
                    if(this.result.slice(-1) === op.find(() => char)){
                        this.result = this.result.slice(0,-1) + char;
                    }
                    else {
                    this.result = this.result.toString();
                    this.result += char; 
                    }
                } 
                else {
                    this.result = this.result.toString();
                    this.result += char; 
                }
            },
           /* inputOper: function(char) {
                this.result = this.result.toString();
                
                console.log(this.result.slice(0,-1));
            },  */
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
