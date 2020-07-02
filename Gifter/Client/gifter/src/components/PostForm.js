import React, { useContext, useRef } from "react"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { PostContext } from "../providers/PostProvider"

export const NewPostForm = () => {


    const { addPost, setPosts } = useContext(PostContext)

    const title = useRef()
    const imageUrl = useRef()
    const caption = useRef()

    const newDate = new Date()
    const dateCreated = newDate.toJSON()
    
    const userProfileId = 1

    const addPostItem = () => {

        const newPost = {
            title: title.current.value,
            imageUrl: imageUrl.current.value,
            caption: caption.current.value,
            dateCreated: dateCreated,
            userProfileId: userProfileId
        }
        console.log(newPost)
        addPost(newPost)
        debugger
    }

    return (
        <Form>
            <FormGroup>
                <Label htmlFor="title">Title</Label>
                <Input type="text"
                        name="title"
                        innerRef={title}
                        required
                        autoFocus
                        placeholder="title"></Input>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="imageUrl">Image URL</Label>
                <Input type="text"
                        name="imageUrl"
                        innerRef={imageUrl}
                        required
                        autoFocus
                        placeholder="imageUrl"></Input>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="caption">Caption</Label>
                <Input type="textarea"
                        name="caption"
                        innerRef={caption}
                        required
                        autoFocus
                        placeholder="caption"></Input>
            </FormGroup>
            <Button color="success" type="submit"
                onClick={event => {
                    event.preventDefault()
                    addPostItem()
                }}>
                Save Post
            </Button>
        </Form>
    )
}