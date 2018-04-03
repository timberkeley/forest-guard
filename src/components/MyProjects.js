import React from 'react';
import { Card } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { translate } from 'admin-on-rest';
import { pink400 } from 'material-ui/styles/colors';
import { BASE_URL } from '../consts';
import CountProjects from './CountProjects';

const style = { flex: 1 };
const cardStyle = {width: '400px'};
export default translate(({ projects = [], translate }) => (
    <div style={style}>
      <CountProjects value={projects.length} />
      <Card style={cardStyle}>
          <List>
              {projects.map(record =>
                  <ListItem
                      key={record.id}
                      href={`${BASE_URL}/project/${record.slug}`}
                      target="_blank"
                      primaryText={record.name}
                      secondaryText={record.description}
                      leftAvatar={<Avatar backgroundColor={pink400}>{record.name.charAt(0)}</Avatar>}
                  />
              )}
          </List>
      </Card>
    </div>
));

