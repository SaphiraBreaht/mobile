<template>
<Page>
    <ActionBar title="TODOlist" />
    <TabView height="100%">
        <TabViewItem title="To Do">
            <StackLayout backgroundColor="false" width="100%" height="100%">
                <GridLayout columns="2*,*" rows="auto" width="100%">
                    <TextField row="0" col="0" v-model="textFieldValue" hint="Введите задачу" />
                    <Button row="0" col="1" text="Добавить" @tap="onButtonTap" />
                </GridLayout>
                <ListView for="todo in todos" @itemTap="onItemTap" height="100%">
                    <v-template>
                        <Label :text="todo.name" />
                    </v-template>
                </ListView>
            </StackLayout>
        </TabViewItem>
        
        <TabViewItem title="Done">
            <ListView for="done in dones" @itemTap="onDoneTap" height="100%">
                <v-template>
                    <Label :text="done.name" />
                </v-template>
            </ListView>
        </TabViewItem>
    </TabView>
</Page>
</template>

<script>
    import {ApplicationSettings} from "@nativescript/core";
    export default {
        data() {
            return {
                todos: [],
                dones: [],
                textFieldValue: ""
            };
        },
        mounted() {
            if (ApplicationSettings.getString("todos")) {
                this.todos = Object.values(
                    JSON.parse(ApplicationSettings.getString("todos"))
                );
            }
        },
        methods: {
            onButtonTap() {
                if (this.textFieldValue != "") {
                    this.todos.push({name: this.textFieldValue
                    });
                    this.textFieldValue = "";
                }
                this.save();
            },
            onItemTap: function(args) {
                action("Что хотите сделать с задачей?", "Отмена", [
                    "Изменить",
                    "Задача выполнена",
                    "Удалить"
                ]).then(result => {
                    console.log(
                    result); // Лог в консоли выбранного ответа диалога
                    switch (result) {
                        case "Задача выполнена":
                            this.dones.unshift(args.item); // Размещение нажатой активной задачи в топ выполненных задач
                            this.todos.splice(args.index,1); // Удаление нажатой задачи из активных break;
                            this.save();
                            break;
                        case "Изменить":
                            prompt({
                                title: "Изменение задачи",
                                message: "Новая задача:",
                                okButtonText: "Изменить",
                                cancelButtonText: "Отмена"
                            }).then(result => {
                                if (result.text != "") {
                                    this.todos[args.index].name = result.text;
                                    this.save();
                                }
                                console.log(result.text);
                            });
                            break;
                        case "Удалить":
                            this.todos.splice(args.index, 1); // Удаление нажатой задачи из активных
                            this.save();
                            break;
                        case "Отмена" || undefined: // Отмена действия
                            break;
                    }
                });
            },
            onDoneTap: function(args) {
                action("Что сделать с задачей", "Отмена", [
                    "Вернуть в активные задачи",
                    "Удалить"
                ]).then(result => {
                    console.log(
                    result); // Logs the selected option for debugging.
                    switch (result) {
                        case "Вернуть в активные задачи":
                            this.todos.unshift(args.item);
                            // Размещение нажатой активной задачи в топ ToDo 
                            this.dones.splice(args.index, 1); // Удаление нажатой задачи из завершенных
                            this.save();
                        break;
                        case "Удалить":
                            this.dones.splice(args.index,1); //Удаление нажатой задачи из завершенных 
                            this.save();
                        break; 
                            case 'Отмена'||undefined:
                        break;
                    }
                });
            },
            save() {
                let toSave = Object.assign({}, this.todos);
                ApplicationSettings.setString("todos", JSON.stringify(toSave));
            }
        }
    };
</script>

<style scoped>
    .home-panel {
        vertical-align: center;
        font-size: 20;
        margin: 15;
    }
    .description-label {
        margin-bottom: 15;
    }
</style>