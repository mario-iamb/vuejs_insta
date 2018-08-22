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
            <p>Please fill the bellow fields</p>
            <form action="">
                <input type="text" placeholder="Name">
                <br>
                <input type="text" placeholder="Age">
                <br>
                <input type="text" placeholder="Hobbies">
                <br>
                <input type="text" placeholder="Do have a car?">
                <br>
                <input type="submit" value="ADD">
            </form>
        </div>
    </div>
</template>


<script>
export default {
    name: 'MyList',
    data() {
        return {
            users: [
                {
                    name: 'Romas',
                    age: 'over 60',
                    hobbies: 'flying, diving, cycling',
                    hasCar: true
                },
                {
                    name: 'Mario',
                    age: 'over 30',
                    hobbies: 'swimming, traveling, cycling',
                    hasCar: false
                },
                {
                    name: 'Andrew',
                    age: 'over 30',
                    hobbies: 'swimming, coding, drawing',
                    hasCar: true
                }
            ]
        }
    }
}
</script>


<style scoped>
    .my-list {
        margin-top: 20px;
    }

    .page {
        text-align: left;
    }
    li {
        list-style-type:none;
        padding: 0 0 20px 0;
    }

    h2 {
        padding-left: 40px;
        font-size: 18px;
    }

    .current-users, .add-users {
        width: 50%;
        float: left;
    }

    .add-users p {
        padding: 0 0 0 40px;
        margin: -15px 0 20px 0;
        font-size: 12px;
    }

    input {
        width: 50%;
        background: rgb(233, 233, 233);
        border: 1px dotted gray;
        font-size: 12px;
        padding: 5px 10px;
        margin: 0 0 10px 40px;
    }

    input[type="submit"] {
        width: inherit;
        background: white;
        border: none;
        cursor: pointer;
    }
</style>



