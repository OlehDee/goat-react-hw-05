import Profile from './components/profile/Profile';
import FriendList from './components/friends_list/FriendList';
import TransactionHistory from './components/transaction/transactionHistory';
import userData from './userData.json';
import friends from './FriendList.json';
import transactions from './transactions.json';

const App = () => {
 return (
     <>
     <Profile
         name={userData.username}
         tag={userData.tag}
         location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
     />
     <FriendList friends={friends} />
     <TransactionHistory items={transactions} />
    </>
    );
};

export default App;
