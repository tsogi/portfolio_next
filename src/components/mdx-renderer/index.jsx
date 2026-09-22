/*
MdxRenderer component that takes compiled MDX code and displays it in JSX
*/

import { MDXRemote } from 'next-mdx-remote'

const MdxRenderer = (props) => {
  // Destructure props
  const { frontmatter, compiledSource, scope } = props.serializedSource
  return (
    // Custom components must be passed directly to <MDXRemote /> (next-mdx-remote v6+)
    // since it wraps content with its own internal MDXProvider instance
    <MDXRemote
      frontmatter={frontmatter}
      compiledSource={compiledSource}
      scope={scope}
      components={props.components}
    />
  )
}

export default MdxRenderer
