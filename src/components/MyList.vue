<template>
    <div class="my-list page">
        <div class="current-users">
            <h2>Current users</h2>

            <table width="100%" cellpadding="0" cellspacing="0">
                <thead>
                    <tr>
                        <th width="7%"></th>
                        <th width="15%">Name</th>
                        <th width="15%">Age</th>
                        <th width="45%">Hobbies</th>
                        <th width="18%">Has a car?</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in userFilter" :key="user.id">
                        <td class="delete-user"><i v-on:click="deleteUser(user)" class="fas fa-eraser"></i></td>
                        <td>{{user.name}}</td>
                        <td>{{user.age}}</td>
                        <td>{{user.hobbies}}</td>
                        <td>{{user.hasCar}}</td>
                    </tr>
                </tbody>
            </table>

            <p>Filter by age:</p>

            <!-- <button type="button" v-on:click="userFilterKey = 'all'" :class="{ active: userFilterKey == 'all' }">Show All</button>
            <button type="button" v-on:click="userFilterKey = 'nearby'" :class="{ active: userFilterKey == 'nearby' }">Less or equal 30</button> -->

            <ul class="filters">
                <li v-on:click="userFilterKey = 'all'" :class="{ active: userFilterKey == 'all' }">All</li>
                <li v-on:click="userFilterKey = 'below30'" :class="{ active: userFilterKey == 'below30' }">below 30</li>
                <li v-on:click="userFilterKey = 'over60'" :class="{ active: userFilterKey == 'over60' }">over 60</li>
            </ul>

        </div>

        <div class="add-users">
            <h2>Add a new user</h2>
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
                    <p>Has a car?</p>

                    <div class="switcher">
                        <input type="radio" name="hasCar" v-bind:value="'No'" id="no" class="switcher__input switcher__input--yin" v-model="newUser.hasCar">
                        <label for="no" class="switcher__label">No</label>
                        
                        <input type="radio" name="hasCar" v-bind:value="'Yes'" id="yes" class="switcher__input switcher__input--yang" v-model="newUser.hasCar">
                        <label for="yes" class="switcher__label">Yes</label>
                        
                        <span class="switcher__toggle"></span>
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

            newUser: {
                hasCar: 'No'
            },
            
            numbers: [
                11, 26, 36, 41, 58
            ],

            userFilterKey: 'all',
            
            users: [
                {
                    name: 'Romas',
                    age: '60',
                    hobbies: 'flying, diving, cycling',
                    hasCar: 'Yes'
                },
                {
                    name: 'Mario',
                    age: '30',
                    hobbies: 'swimming, traveling, cycling',
                    hasCar: 'No'
                },
                {
                    name: 'Andrew',
                    age: '30',
                    hobbies: 'swimming, coding, drawing',
                    hasCar: 'Yes'
                },
                {
                    name: 'Ian',
                    age: '35',
                    hobbies: 'swimming, traveling, cycling',
                    hasCar: 'No'
                },
                {
                    name: 'John',
                    age: '25',
                    hobbies: 'cars, fashion, technology',
                    hasCar: 'Yes'
                }
            ]
        }
    },
    computed: {

        userFilter() {
            return this[this.userFilterKey]
        },

        all() {
            return this.users
        },

        below30() {
            return this.users.filter((user) => user.age <= 30)
        },
        over60() {
            return this.users.filter((user) => user.age >= 60)
        }

        // evenNumbers: function () {
        //     return this.numbers.filter(function (number) {
        //         return number % 2 === 0
        //     })
        // }
    },
    methods: {
        addUser: function(e) {

            // pushes newly created 'newUser' into 'users' array
            this.users.unshift({
                name:this.newUser.name,
                age:this.newUser.age,
                hobbies:this.newUser.hobbies,
                hasCar:this.newUser.hasCar
            });

            // Clears input values after submit
            this.newUser.name = '';
            this.newUser.age = '';
            this.newUser.hobbies = '';

            e.preventDefault();
        },
        deleteUser:function(user){
            var index = this.users.indexOf(user);
            this.users.splice(index, 1);
        }
    }
}
</script>


<style lang="scss" scoped>

    .my-list {
        margin-top: 20px;
        //border: 1px dotted red;

        h2 {
            color: lightseagreen;
            font-size: 18px;
        }

        &.page {
            text-align: left;
        }

        .current-users {
            width: 65%;
            float: left;

            p {
                font-size: 13px;
                font-weight: bold;
                padding: 0;
                margin: 50px 0 0 0;
            }

            ul.filters {
                margin: 0;
                padding: 0;

                // li {
                //     display: inline-block;
                //     font-size: 12px;
                //     background: lightseagreen;
                //     color: white;
                //     margin: 0 10px 10px 0;
                //     padding: 2px 10px;
                //     border-radius: 30px;    
                // }
                li {
                    display: inline-block;
                    font-size: 13px;
                    margin: 0 10px 10px 0;
                    padding: 2px 0px;
                    border-bottom: 1px dotted grey;
                    cursor: pointer;

                    &.active {
                        color: lightseagreen;
                        border-bottom: none;
                        
                    }
                }
            }

            table {
                max-width: 450px;

                th {
                    font-size: 13px;
                    padding-bottom: 5px;
                }

                td {
                    font-size: 12px;
                    border-bottom: 1px dotted gray;
                    padding: 4px 0 4px 0;

                    &.delete-user {
                        i {
                            color: lightseagreen;
                            font-size: 13px;
                            cursor: pointer;
                        }
                    }
                }

                tr {
                    &:last-child {
                        td {
                            border-bottom: none;
                        }
                    }
                }
            }

            button.active {
                color: red;
            }
        }

        .add-users {
            width: 35%;
            float: left;

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
                    width: 70%;
                    background: rgb(233, 233, 233);
                    border: none;
                    border-bottom: 1px dotted gray;
                    font-size: 12px;
                    padding: 5px 10px 5px 0;
                    outline: none;

                    &:focus {
                        border-bottom: 1px dotted lightseagreen;
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



