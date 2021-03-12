import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export function Comments({ comments }) {



    return (
        <View style={styles.container}>
            <Text style={styles.header}>Yorumlar</Text>
            {
                comments.map((item,key) => {
                    return (
                        <View style={styles.comment} key={key}>
                            <View style={styles.comments_info}>
                                <Text>{item.comment_author}</Text>
                                <Text>{item.comment_date}</Text>
                            </View>
                            <Text style={styles.comment_content}>{item.comment_content}</Text>
                        </View>
                    );
                })
            }
        </View>
    )
}
