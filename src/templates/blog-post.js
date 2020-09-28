import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import Img from 'gatsby-image';

import Layout from '../components/layout';
import { ArticleCoverAbout, ArticleFooter } from '../components';
import media from '../utils/mediaQueryTemplates';


// Styled components
const ArticleContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1em;

  ${media.small`
    margin-left: 80px;
    padding: 0;
  `}
`;
const Article = styled.div`
  max-width: 100%;
  flex-shrink: 0;
  flex-grow: 0;
  
  ${media.small`
    max-width: 40em;
    margin-right: 2em;
  `}
`;
const ArticleHeader = styled.div`
  padding-bottom: 1em;
`;
const ArticleHeadings = styled.div``;
const PostTitle = styled.h1`
  font-size: 2em;
  line-height: 1.1em;
  margin-bottom: 0.5em;
`;
const ArticleEndHorizontalRule = styled.hr`
  margin-bottom: 1em;
`;
const PostDate = styled.p`
  font-size: 0.9em;
`;
// const CoverImageContainer = styled.div`
//   flex-grow: 1;
//   flex-shrink: 1;
//   overflow: hidden;
//   display: none;

//   ${media.small`
//     display: block;
//   `}
// `;
// const CoverImage = styled(Img)`
//   width: 350px;
//   overflow-x: hidden;
// `;
const PostContent = styled.div`
  & blockquote {
    font-size: 0.9rem;
  }  

  & figure {
  }

  & figure img {
    display: block;
    margin: 0 auto;
  }

  & figure figcaption {
      text-align: center;
      font-size: 14px;
  }
`;


export default function BlogPostTemplate({ data, location }) {
  const { markdownRemark: post } = data;

  return (
    <Layout location={location} pageTitle={post.frontmatter.title}>
      <ArticleContainer>
        <Article>
          <ArticleHeader>
            <ArticleHeadings>
              <PostTitle>{post.frontmatter.title}</PostTitle>
              <PostDate>{post.frontmatter.date}</PostDate>
            </ArticleHeadings>
          </ArticleHeader>
          <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
          <ArticleEndHorizontalRule />
          <ArticleFooter
            authors={post.frontmatter.authors}
            path={post.fields.slug}
            title={post.frontmatter.title}
          />
          <ArticleCoverAbout
            text={post.frontmatter.coverDesc}
            img={post.frontmatter.featuredImage}
          />
        </Article>
        {/* {post.frontmatter.featuredImage
          ? (
            <CoverImageContainer>
            </CoverImageContainer>
          )
          : null
        } */}
      </ArticleContainer>
    </Layout>
  );
}

BlogPostTemplate.propTypes = {
  data: PropTypes.object.isRequired
};

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        authors
        date(formatString: "MMMM DD, YYYY")
        title
        coverDesc
        featuredImage {
          childImageSharp {
            fluid(maxHeight: 1000) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }
    }
  }
`;
