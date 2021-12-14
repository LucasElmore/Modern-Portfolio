import * as React from 'react'
import { Blob } from 'react-blob'
import { BlobContainer } from './BlobStyles'

export const Avatar = ({src, alt}) => (
    <BlobContainer>
        <Blob size="300px" src={src} alt={alt} style={{background: '#ccc', marginLeft: '25rem', marginTop: '9rem'}}/>
    </BlobContainer>
)
export const FunnyLinkButton = ({href, ...props}) =>
  <a href={href}><Blob size="2em" {...props}/></a>

export const BackgroundBlob = ({style, props}) =>
  <Blob size="100vh"
    style={{
        position: 'absolute',
        top: '-15%',
        right: '-15%',
        zIndex: -1,
        backgroundColor: '#21D4FD',
        color: 'white',
        opacity: 0.05,
        fontSize: '50vh',
        ...style
    }}
    {...props}
  />

