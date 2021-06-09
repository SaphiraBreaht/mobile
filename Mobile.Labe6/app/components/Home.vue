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
                            <Button text="Ханты-Мансийск" value="Ханты-Мансийск" padding="10" @tap="Output('Ханты-Мансийск')" />
                            <Button text="Тюмень" padding="10"  @tap="Output('Тюмень')" />
                            <Button text="Урай" padding="10"  @tap="Output('Урай')" />
                            <Button text="Сочи" padding="10"  @tap="Output('Сочи')" />
                            <Button text="Кисловодск" padding="10" @tap="Output('Кисловодск')" />
                            <Button text="Москва" padding="10" @tap="Output('Москва')" />
                            <Button text="Норильск" padding="10" @tap="Output('Норильск')" />
                            <Button text="Мурманск" padding="10"  @tap="Output('Мурманск')" />
                            <Button text="Заполярный" padding="10" @tap="Output('Заполярный')" />
                            <Button text="Кемерово" padding="10" @tap="Output('Кемерово')" />
                            <Button text="Анадырь" padding="10"  @tap="Output('Анадырь')" />
                            <Label text="Закрыть" color="lightgray"  padding="10" style="horizontal-align: center" @tap="onCloseDrawerTap" />
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
    import {
        Http
    } from "@nativescript/core";
    import * as http from "@nativescript/core/http";
    import *
    as ApplicationSettings from "@nativescript/core/application-settings";

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
            Output: function(city) {
                if (city) {
                    const url = encodeURI(
                        "https://api.openweathermap.org/data/2.5/weather?q=" +
						 city +
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
                        this.name = this.result.name;
                        this.speed = this.result.wind.speed;
                        this.temp = CalculateTemperature(this.result.main.temp);
                        this.temp_max = CalculateTemperature(this.result.main.temp_max);
                        this.temp_min = CalculateTemperature(this.result.main.temp_min);
                        this.pressure = CalculatePressure(this.result.main.pressure);
                        console.log(this.result);
                    });
                } else {
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
                        this.name = this.result.name;
                        this.speed = this.result.wind.speed;
                        this.temp = CalculateTemperature(this.result.main.temp);
                        this.temp_max = CalculateTemperature(this.result.main.temp_max);
                        this.temp_min = CalculateTemperature(this.result.main.temp_min);
                        this.pressure = CalculatePressure(this.result.main.pressure);
                        console.log(this.result);
                    });
                }
            },
            CalculateTemperature(temp) {
                Math.round(temp - 273.15, 1);
            },
            CalculatePressure(pressure) {
                Math.round(pressure * 0.7500637554192, 1);
            }
        }
    };
</script>

<style>

</style>