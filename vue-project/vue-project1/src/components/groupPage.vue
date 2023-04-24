<template>
    <topNavigator/>
    <div class="outer-wrapper">
        <div class="inner-wrapper">
            <div class="group-name">Nature Lover</div>
            <div class="members">
                <div>Group Members</div>
                <h3>Member 1: Ziang (Joined by 04/01/2023)</h3>
                <h3>Member 2: Yi (Joined by 04/01/2023)</h3>
                <h3>Member 3: Enze (Joined by 04/01/2023)</h3>
                <h3>Member 4: Ben (Joined by 04/01/2023)</h3>
                <h3>Member 5: Savant (Joined by 04/01/2023)</h3>

            </div>
            <div class="accoutability1">
                <div class="pend">Pending Works</div>
                <h3>1. Organize a nature walk and clean-up event at the local park</h3>
                <h3>2. Research and compile a list of local wildlife conservation organizations for members to support</h3>
                <h3>3. Plan a fundraising event to support a local animal shelter</h3>
                <h3>4. Create a guide to local hiking trails and nature reserves to share with members</h3>
                <h3>5. Develop a social media strategy to increase awareness and engagement with the group's activities and mission.</h3>
            </div>
            <div class="accoutability2">
                <div class="done">Works Done</div>
                <h3>1. Cleaned up a local park and raised awareness about littering</h3>
                <h3>2. Raised funds for a local animal shelter</h3>
                <h3>3. Created a guide to local hiking trails and nature reserves</h3>
                <h3>4. Hosted educational events with local wildlife conservation organizations</h3>
                <h3>5. Developed a strong social media presence to promote the group's activities and mission.</h3>
            </div>
        </div>
    </div>
    <mainFooter/>
</template>

<script>
import topNavigator from "./firstPage/topNavigator.vue"
import mainFooter from "./firstPage/mainFooter.vue"
export default {
    components: {
        topNavigator,
        mainFooter
    }
}
</script>

<style>
    .outer-wrapper{
        height: 1000px;
        width: 1000px;
        background-color: rgb(243, 246, 249);
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.4);
        margin: 10px auto;
        border-radius: 5px;
        display: flex;
    }

    .inner-wrapper{
        height: 95%;
        width: 95%;
        background-color: #fff;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.4);
        margin: 20px auto;
        display: flex;
        justify-content: center;
        /* align-items: center; */
        flex-direction: column;
    }

    .group-name{
        margin: 0 auto;
        font-size: 30px;
        font-weight: bold;
        /* text-decoration: wavy; */
        padding-bottom: 25px;
        color: #fff;
        background-color: rgb(233, 66, 5);
        border-radius: 6px;
        width: 220px;
        height: 20px;
        text-align: center;
    }

    .members{
        height: 200px;
        width: 800px;
        background-color: #fff;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.4);
        margin: 15px auto;
        display: flex;
        /* justify-content: center; */
        flex-direction: column;
    }

    .members div{
        margin: 0 auto;
        font-size: 25px;
        font-weight: bold;
        text-decoration: underline;
        padding-bottom: 15px;
    }

    .members h3{
        font-size: 20px;
        padding-bottom: 5px;
        padding-left: 25px;
        font-family: 'Courier New', Courier, monospace;
    }

    .accoutability1{
        height: 300px;
        width: 800px;
        background-color: #fff;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.4);
        margin: 20px auto;
        display: flex;
        flex-direction: column;
    }

    .accoutability1 .pend{
        margin: 0 auto;
        font-size: 25px;
        font-weight: bold;
        text-decoration: underline;
        padding-bottom: 20px;
    }

    .accoutability1 h3{
        font-size: 20px;
        padding-bottom: 15px;
        padding-left: 25px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: lighter;
    }

    .accoutability2{
        height: 290px;
        width: 800px;
        background-color: #fff;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.4);
        margin: 10px auto;
        display: flex;
        flex-direction: column;
    }

    .accoutability2 .done{
        margin: 0 auto;
        font-size: 25px;
        font-weight: bold;
        text-decoration: underline;
        padding-bottom: 20px;
    }

    .accoutability2 h3{
        font-size: 20px;
        padding-bottom: 15px;
        padding-left: 25px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: lighter;
    }
</style>
