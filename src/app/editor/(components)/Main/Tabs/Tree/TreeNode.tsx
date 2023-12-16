const TreeNode = ({ node }) => (
  <div className="relative ml-10">
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white">
      {node.name}
    </div>
    {node.children && node.children.length > 0 && (
      <div className="border-l-2 border-blue-500 pl-8 mt-2">
        {node.children.map((childNode) => (
          <TreeNode key={childNode.id} node={childNode} />
        ))}
      </div>
    )}
  </div>
);

export default TreeNode;
