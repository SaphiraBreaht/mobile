<template>
    <Page>
        <ActionBar title="Погода" />
        <GridLayout rows="*" height="1500px">
            <RadSideDrawer ref="drawer">
                <StackLayout ~drawerContent backgroundColor="gray">
                    <StackLayout height="24"
                        style="text-align: center; vertical-align: center;">
                        <Label text="Выберите город" />
                    </StackLayout>
                    <ScrollView>
                        <StackLayout>
                            <Button text="Ханты-Мансийск" padding="10"
                                @tap="KhM()" />
                            <Button text="Тюмень" padding="10" @tap="Tym()" />
                            <Button text="Урай" padding="10" @tap="Uray()" />
                            <Button text="Сочи" padding="10" @tap="Sochi()" />
                            <Button text="Кисловодск" padding="10"
                                @tap="KisK()" />
                            <Button text="Москва" padding="10"
                                @tap="Mosc()" />
                            <Button text="Норильск" padding="10"
                                @tap="Noril()" />
                            <Button text="Мурманск" padding="10"
                                @tap="Murm()" />
                            <Button text="Заполярный" padding="10"
                                @tap="Zapol()" />
                            <Button text="Кемерово" padding="10"
                                @tap="Kem()" />
                            <Button text="Анадырь" padding="10"
                                @tap="Anad()" />
                            <Label text="Закрыть" color="lightgray"
                                padding="10" style="horizontal-align: center"
                                @tap="onCloseDrawerTap" />
                        </StackLayout>
                    </ScrollView>
                </StackLayout>
                <StackLayout ~mainContent>
                    <Label padding="10">Город: {{this.name}}</Label>
                    <Label padding="10">Текущая температура(С°): {{this.temp}}
                    </Label>
                    <Label padding="10">Минимальная температура(С°): {{this.temp_min}}</Label>
                    <Label padding="10">Минимальная температура(С°): {{this.temp_max}}</Label>
                    <Label padding="10">Давление(мм.рт.ст): {{this.pressure}}
                    </Label>
                    <Label padding="10">Скорость ветра(м/с): {{this.speed}}
                    </Label>
                    <TextField v-model="name" hint="Введите город" />
                    <Button text='Вывести' @tap="Output()" />
                </StackLayout>
            </RadSideDrawer>
        </GridLayout>
    </Page>
</template>

<script>
    import Vue from "nativescript-vue";
    import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
    Vue.use(RadSideDrawer);
    import {Http} from "@nativescript/core";
    import * as http from "@nativescript/core/http";
    import * as ApplicationSettings from "@nativescript/core/application-settings";

    export default {
        data() {
            return {
                main: {
                    temp: "",
                    pressure: "",
                    temp_min: "",
                    temp_max: ""
                },
                wind: {
                    speed: ""
                },
                name: ""
            };
        },
        methods: {
            onCloseDrawerTap() {
                this.$refs.drawer.nativeView.closeDrawer();
            },
            KhM() {
                const url = encodeURI(
                    "https://api.openweathermap.org/data/2.5/weather?q=Ханты-Мансийск&appid=29876907afc8b79c1e64ff345dd64baa"
                );
                http.request({
                    method: "GET",
                    url: url,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(result => {
                    console.log(result);
                    this.result = result.content.toJSON();
                    this.temp = Math.round(this.result.main.temp -
                        273.15, 1);
                    this.temp_max = Math.round(
                        this.result.main.temp_max - 273.15,
                        1
                    );
                    this.temp_min = Math.round(
                        this.result.main.temp_min - 273.15,
                        1
                    );
                    this.pressure = Math.round(
                        this.result.main.pressure *
                        0.7500637554192,
                        1
                    );
                    this.name = this.result.name;
                    this.speed = this.result.wind.speed;
                    InCelsius();
                    console.log(this.result);
                });
            },
            Tym() {
                const url = encodeURI(
                    "https://api.openweathermap.org/data/2.5/weather?q=Тюмень&appid=29876907afc8b79c1e64ff345dd64baa"
                );
                http.request({
                    method: "GET",
                    url: url,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(result => {
                    console.log(result);
                    this.result = result.content.toJSON();
                    this.temp = Math.round(this.result.main.temp -
                        273.15, 1);
                    this.temp_max = Math.round(
                        this.result.main.temp_max - 273.15,
                        1
                    );
                    this.temp_min = Math.round(
                        this.result.main.temp_min - 273.15,
                        1
                    );
                    this.pressure = Math.round(
                        this.result.main.pressure *
                        0.7500637554192,
                        1
                    );
                    this.name = this.result.name;
                    this.speed = this.result.wind.speed;
                    console.log(this.result);
                });
            },
            Uray() {
                const url = encodeURI(
                    "https://api.openweathermap.org/data/2.5/weather?q=Урай&appid=29876907afc8b79c1e64ff345dd64baa"
                );
                http.request({
                    method: "GET",
                    url: url,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(result => {
                    console.log(result);
                    this.result = result.content.toJSON();
                    this.temp = Math.round(this.result.main.temp -
                        273.15, 1);
                    this.temp_max = Math.round(
                        this.result.main.temp_max - 273.15,
                        1
                    );
                    this.temp_min = Math.round(
                        this.result.main.temp_min - 273.15,
                        1
                    );
                    this.pressure = Math.round(
                        this.result.main.pressure *
                        0.7500637554192,
                        1
                    );
                    this.name = this.result.name;
                    this.speed = this.result.wind.speed;
                    console.log(this.result);
                });
            },
            Sochi() {
                const url = encodeURI(
                    "https://api.openweathermap.org/data/2.5/weather?q=Сочи&appid=29876907afc8b79c1e64ff345dd64baa"
                );
                http.request({
                    method: "GET",
                    url: url,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(result => {
                    console.log(result);
                    this.result = result.content.toJSON();
                    this.temp = Math.round(this.result.main.temp -
                        273.15, 1);
                    this.temp_max = Math.round(
                        this.result.main.temp_max - 273.15,
                        1
                    );
                    this.temp_min = Math.round(
                        this.result.main.temp_min - 273.15,
                        1
                    );
                    this.pressure = Math.round(
                        this.result.main.pressure *
                        0.7500637554192,
                        1
                    );
                    this.name = this.result.name;
                    this.speed = this.result.wind.speed;
                    console.log(this.result);
                });
            },
            KisK() {
                const url = encodeURI(
                    "https://api.openweathermap.org/data/2.5/weather?q=Кисловодск&appid=29876907afc8b79c1e64ff345dd64baa"
                );
                http.request({
                    method: "GET",
                    url: url,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(result => {
                    console.log(result);
                    this.result = result.content.toJSON();
                    this.temp = Math.round(this.result.main.temp -
                        273.15, 1);
                    this.temp_max = Math.round(
                        this.result.main.temp_max - 273.15,
                        1
                    );
                    this.temp_min = Math.round(
                        this.result.main.temp_min - 273.15,
                        1
                    );
                    this.pressure = Math.round(
                        this.result.main.pressure *
                        0.7500637554192,
                        1
                    );
                    this.name = this.result.name;
                    this.speed = this.result.wind.speed;
                    console.log(this.result);
                });
            },
            Mosc() {
                const url = encodeURI(
                    "https://api.openweathermap.org/data/2.5/weather?q=Москва&appid=29876907afc8b79c1e64ff345dd64baa"
                );
                http.request({
                    method: "GET",
                    url: url,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(result => {
                    console.log(result);
                    this.result = result.content.toJSON();
                    this.temp = Math.round(this.result.main.temp -
                        273.15, 1);
                    this.temp_max = Math.round(
                        this.result.main.temp_max - 273.15,
                        1
                    );
                    this.temp_min = Math.round(
                        this.result.main.temp_min - 273.15,
                        1
                    );
                    this.pressure = Math.round(
                        this.result.main.pressure *
                        0.7500637554192,
                        1
                    );
                    this.name = this.result.name;
                    this.speed = this.result.wind.speed;
                    console.log(this.result);
                });
            },
            Noril() {
                const url = encodeURI(
                    "https://api.openweathermap.org/data/2.5/weather?q=Норильск&appid=29876907afc8b79c1e64ff345dd64baa"
                );
                http.request({
                    method: "GET",
                    url: url,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(result => {
                    console.log(result);
                    this.result = result.content.toJSON();
                    this.temp = Math.round(this.result.main.temp -
                        273.15, 1);
                    this.temp_max = Math.round(
                        this.result.main.temp_max - 273.15,
                        1
                    );
                    this.temp_min = Math.round(
                        this.result.main.temp_min - 273.15,
                        1
                    );
                    this.pressure = Math.round(
                        this.result.main.pressure *
                        0.7500637554192,
                        1
                    );
                    this.name = this.result.name;
                    this.speed = this.result.wind.speed;
                    console.log(this.result);
                });
            },
            Murm() {
                const url = encodeURI(
                    "https://api.openweathermap.org/data/2.5/weather?q=Мурманск&appid=29876907afc8b79c1e64ff345dd64baa"
                );
                http.request({
                    method: "GET",
                    url: url,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(result => {
                    console.log(result);
                    this.result = result.content.toJSON();
                    this.temp = Math.round(this.result.main.temp -
                        273.15, 1);
                    this.temp_max = Math.round(
                        this.result.main.temp_max - 273.15,
                        1
                    );
                    this.temp_min = Math.round(
                        this.result.main.temp_min - 273.15,
                        1
                    );
                    this.pressure = Math.round(
                        this.result.main.pressure *
                        0.7500637554192,
                        1
                    );
                    this.name = this.result.name;
                    this.speed = this.result.wind.speed;
                    console.log(this.result);
                });
            },
            Zapol() {
                const url = encodeURI(
                    "https://api.openweathermap.org/data/2.5/weather?q=Заполярный&appid=29876907afc8b79c1e64ff345dd64baa"
                );
                http.request({
                    method: "GET",
                    url: url,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(result => {
                    console.log(result);
                    this.result = result.content.toJSON();
                    this.temp = Math.round(this.result.main.temp -
                        273.15, 1);
                    this.temp_max = Math.round(
                        this.result.main.temp_max - 273.15,
                        1
                    );
                    this.temp_min = Math.round(
                        this.result.main.temp_min - 273.15,
                        1
                    );
                    this.pressure = Math.round(
                        this.result.main.pressure *
                        0.7500637554192,
                        1
                    );
                    this.name = this.result.name;
                    this.speed = this.result.wind.speed;
                    console.log(this.result);
                });
            },
            Kem() {
                const url = encodeURI(
                    "https://api.openweathermap.org/data/2.5/weather?q=Кемерово&appid=29876907afc8b79c1e64ff345dd64baa"
                );
                http.request({
                    method: "GET",
                    url: url,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(result => {
                    console.log(result);
                    this.result = result.content.toJSON();
                    this.temp = Math.round(this.result.main.temp -
                        273.15, 1);
                    this.temp_max = Math.round(
                        this.result.main.temp_max - 273.15,
                        1
                    );
                    this.temp_min = Math.round(
                        this.result.main.temp_min - 273.15,
                        1
                    );
                    this.pressure = Math.round(
                        this.result.main.pressure *
                        0.7500637554192,
                        1
                    );
                    this.name = this.result.name;
                    this.speed = this.result.wind.speed;
                    console.log(this.result);
                });
            },
            Anad() {
                const url = encodeURI(
                    "https://api.openweathermap.org/data/2.5/weather?q=Анадырь&appid=29876907afc8b79c1e64ff345dd64baa"
                );
                http.request({
                    method: "GET",
                    url: url,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(result => {
                    console.log(result);
                    this.result = result.content.toJSON();
                    this.temp = Math.round(this.result.main.temp -
                        273.15, 1);
                    this.temp_max = Math.round(
                        this.result.main.temp_max - 273.15,
                        1
                    );
                    this.temp_min = Math.round(
                        this.result.main.temp_min - 273.15,
                        1
                    );
                    this.pressure = Math.round(
                        this.result.main.pressure *
                        0.7500637554192,
                        1
                    );
                    this.name = this.result.name;
                    this.speed = this.result.wind.speed;
                    console.log(this.result);
                });
            },

            Output() {
                const url = encodeURI(
                    "https://api.openweathermap.org/data/2.5/weather?q=" +
                    this.name +
                    "&appid=29876907afc8b79c1e64ff345dd64baa"
                );
                http.request({
                    method: "GET",
                    url: url,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(result => {
                    console.log(result);
                    this.result = result.content.toJSON();
                    this.temp = Math.round(this.result.main.temp -
                        273.15, 1);
                    this.temp_max = Math.round(
                        this.result.main.temp_max - 273.15,
                        1
                    );
                    this.temp_min = Math.round(
                        this.result.main.temp_min - 273.15,
                        1
                    );
                    this.pressure = Math.round(
                        this.result.main.pressure *
                        0.7500637554192,
                        1
                    );
                    this.name = this.result.name;
                    this.speed = this.result.wind.speed;
                    console.log(this.result);
                });
            }
        }
    };
</script>

<style>

</style>