import angel from "../../assets/media/profile/angel.jpg"

function Profile() {
    return (
    <div class="container-profile">
        <div class="first-part-profile">
            <img class="channel-photo" src={angel} alt="angel" />
            <div class="text-channel">
                <h2>Channel name</h2>
                <div class="row-info">
                    <p class="space">@name</p>
                    <p class="space">0 Catscribers</p>
                    <p class="space">0 videos</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolorem magnam fuga cupiditate aut
                    illum ratione quidem aliquid, magni fugit tempora molestias quo alias possimus delectus sunt sequi, quaerat
                    quasi?</p>
            </div>
        </div>
        <div class="row">
            <a href="/studio/studio.html?section=customization" class="customize-btn-channel">
                <button class="customize-btn-channel">Customize channel</button>
            </a>
            <a href="/studio/studio.html?section=content"><button class="manage-btn-videos">Manage videos</button></a>
        </div>
    </div>
    );
}

export default Profile;