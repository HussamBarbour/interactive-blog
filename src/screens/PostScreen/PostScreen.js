import React, { useEffect } from 'react'
import { Post } from '../../containers'
import { Share } from 'react-native';

export function PostScreen({ route, navigation }) {
    const onShare = async () => {
        try {
          const result = await Share.share({
            message: route.params.post.guid,
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };

    useEffect(() => {
        navigation.setOptions({
            title: route.params.post.post_title,
        });
    }, []);


    return (

        <Post post={route.params.post} back={()=>{navigation.goBack()}} share={onShare} />
    );
}
