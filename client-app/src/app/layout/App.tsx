import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Header, Icon, List} from 'semantic-ui-react';
import { Activity } from '../models/activity';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities').then(response => {
      setActivities(response.data);
    })
  }, [])


  return (
    <div>
       <Header as='h2'>
        <Icon name='users' />
        <Header.Content>Reactivities</Header.Content>
       </Header>
      <List>
      {activities.map((activity: any) => (
            <List.Item key={activity.id}>
              {activity.title}
            </List.Item>
          ))}
      </List>
    </div>
  );
}

export default App;
