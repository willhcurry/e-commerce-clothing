import React from 'react';

import MenuItem from '../Menu-Item/Menu-Item.component';

import './Directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super ();

        this.state = {
            sections: [
                {
                  title: 'Nintendo Switch',
                  imageUrl: 'https://images.unsplash.com/photo-1559984859-d568d6eeba0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                  id: 1,
                  linkUrl: 'shop/nintendo'
                },
                {
                  title: 'PlayStation 4',
                  imageUrl: 'https://images.unsplash.com/photo-1559706690-1311487b0b51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                  
                  id: 2,
                  linkUrl: 'shop/playstation'
                },
                {
                  title: 'Xbox One',
                  imageUrl: 'https://images.unsplash.com/photo-1531705771309-2c39f632e69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                  id: 3,
                  linkUrl: 'shop/xbox'
                },
                {
                  title: 'Stadia',
                  imageUrl: 'https://cdn1us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2019/03/google-stadia-preview-impressions.jpg?itok=s-0usJuc',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/google'
                },
                {
                  title: 'PC',
                  imageUrl: 'https://images.unsplash.com/photo-1548686304-5c3be888a00b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/pc'
                }
              ]
        }

    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({ title, imageUrl, id, size }) => (
                    <MenuItem key={ id } title={ title } imageUrl={ imageUrl } size={ size } />
                    ))
                }
            </div>
           
        )
    }
}

export default Directory;