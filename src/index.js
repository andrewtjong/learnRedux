import store from "./redux/index"
import {changeCount} from "./redux/count"
import {addFavoriteThing, removeFavoriteThing} from "./redux/favoriteThings"
import {setYouTubeTitle, incrementViewCount, upvoteVideo, downvoteVideo} from "./redux/youTubeVideo"
import {removeUserDetails, setUserDetails} from "./redux/user"


store.dispatch(changeCount(42))
store.dispatch(addFavoriteThing("ANUEL AA"))
store.dispatch(addFavoriteThing("Karol G)"))
store.dispatch(removeFavoriteThing("Karol G"))
store.dispatch(setYouTubeTitle("Diosa Remix"))
store.dispatch(incrementViewCount())
store.dispatch(upvoteVideo())
store.dispatch(incrementViewCount())
store.dispatch(upvoteVideo())
store.dispatch(downvoteVideo())
store.dispatch(setUserDetails({
  firstName: "Joe",
  lastName: "Rogan",
  id: 1,
  email: "joerogan@jre.com"
}))
store.dispatch(removeUserDetails())