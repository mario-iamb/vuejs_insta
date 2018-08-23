<template>
    <div class="my-list page">
        <div class="current-users">
            <h2>Current users</h2>
            <ul>
                <li v-for='user in users' :key='user.id'>
                    {{user.name}}<br> {{user.age}}<br> {{user.hobbies}}<br> {{user.hasCar}}
                </li>
            </ul>
        </div>

        <div class="add-users">
            <h2>Add new user</h2>
            <p>Please fill the fields bellow</p>

            <form v-on:submit="addUser">
                <div class="field">
                    <input type="text" v-model="newUser.name" placeholder="Name">
                </div>

                <div class="field">
                    <input type="text" v-model="newUser.age" placeholder="Age">
                </div>

                <div class="field">
                    <input type="text" v-model="newUser.hobbies" placeholder="Hobbies">
                </div>

                <div class="field">
                    <p>Do you have a car?</p>

                    <div class="switcher">
                        <input type="radio" name="hasCar" v-bind:value="'No'" id="no" class="switcher__input switcher__input--yin" v-model="picked">
                        <label for="no" class="switcher__label">No</label>
                        
                        <input type="radio" name="hasCar" v-bind:value="'Yes'" id="yes" class="switcher__input switcher__input--yang" v-model="picked">
                        <label for="yes" class="switcher__label">Yes</label>
                        
                        <span class="switcher__toggle"></span>
                    </div>

                    <div class="new-div">
                        <span>You picked: {{ picked }}</span>
                    </div>
                </div>

                <div class="field">
                    <input type="submit" value="ADD">
                </div>
            </form>
        </div>
    </div>
</template>


<script>
export default {
    name: 'MyList',

    data() {
        return {
            picked: 'No',

            newUser: {},
            users: [
                {
                    name: 'Romas',
                    age: 'over 60',
                    hobbies: 'flying, diving, cycling',
                    hasCar: 'Yes'
                },
                {
                    name: 'Mario',
                    age: 'over 30',
                    hobbies: 'swimming, traveling, cycling',
                    hasCar: 'No'
                },
                {
                    name: 'Andrew',
                    age: 'over 30',
                    hobbies: 'swimming, coding, drawing',
                    hasCar: 'Yes'
                },
                {
                    name: 'Ian',
                    age: 'over 35',
                    hobbies: 'swimming, traveling, cycling',
                    hasCar: 'No'
                },
                {
                    name: 'John',
                    age: 'over 25',
                    hobbies: 'cars, fashion, technology',
                    hasCar: 'Yes'
                }
            ]
        }
    },
    methods: {
        addUser: function(e) {

            // pushes newly reated 'newUser' into 'users' array
            this.users.unshift({
                name:this.newUser.name,
                age:this.newUser.age,
                hobbies:this.newUser.hobbies,
                hasCar:this.newUser.hasCar,
            });

            // Clears input values after submit
            this.newUser = '';

            e.preventDefault();
        }
    }
}
</script>


<style lang="scss" scoped>

    .my-list {
        margin-top: 20px;

        h2 {
            color: lightseagreen;
            font-size: 18px;
        }

        &.page {
            text-align: left;
        }

        .current-users {
            width: 50%;
            float: left;

            ul {
                margin: 0;
                padding: 0;

                li {
                    list-style-type:none;
                    padding: 0 0 20px 0;
                }
            }
        }

        .add-users {
            width: 50%;
            float: left;
            padding: 0 0 0 40px;
            box-sizing: border-box;

            p {
                margin: -15px 0 20px 0;
                font-size: 12px;
            }

            .field {
                width: 100%;
                float: left;
                margin: 0 0 10px 0;

                p {
                   margin: 5px 0 0 0; 
                }

                input {
                    width: 50%;
                    background: rgb(233, 233, 233);
                    border: 1px dotted gray;
                    font-size: 12px;
                    padding: 5px 10px;
                    outline: none;

                    &:focus {
                        border: 1px dotted lightseagreen;
                    }

                    &[type="submit"] {
                        margin-top: 10px;
                        background: lightseagreen;
                        color: white;
                        border: none;
                        cursor: pointer;
                        border-radius: 30px;
                    }
                }

                //SWITCHER
                .switcher {
                    display: inline-block;
                    width: 90px;
                    height: 18px;
                    margin-top:3px;
                    padding: 4px;
                    background: #cccccc91;
                    border-radius: 30px;
                    position: relative;

                    &__input {
                        display: none;
                    }

                    &__label {
                        width: 50%;
                        float: left;
                        font-size: 12px;
                        line-height: 18px;
                        font-family: 'Avenir', Helvetica, Arial, sans-serif;
                        color: #2c3e50;
                        text-align: center;
                        cursor: pointer;
                        position: inherit;
                        z-index: 10;
                        transition: color 0.2s cubic-bezier(0.4, 0.0, 0.2, 1);
                        will-change: transform;
                    }

                    &__toggle {
                        position: absolute;
                        float: left;
                        height: 20px;
                        width: 45px;
                        font-size: 12px;
                        line-height: 30px;
                        cursor: pointer;
                        background-color: lightseagreen;
                        border-radius: 30px;
                        left: 3px;
                        top: 3px;
                        transition: left 0.25s cubic-bezier(0.4, 0.0, 0.2, 1);
                        will-change: transform;
                    }
                }

                .switcher__input:checked + .switcher__label {
                    color: #fff;
                }

                .switcher__input--yang:checked ~ .switcher__toggle {
                    left: 50px;
                }

                
            }
        }
    }    
</style>



