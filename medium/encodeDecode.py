from typing import List

class Codec:
    def encode(self, strs: List[str]) -> str:
        """Encodes a list of strings to a single string.
        """
        s = '\n'
        res = s.join(strs)
        
        return res
        

    def decode(self, s: str) -> List[str]:
        """Decodes a single string to a list of strings.
        """
        l = s.split('\n')
        return l
        


# Your Codec object will be instantiated and called as such:
# codec = Codec()
# codec.decode(codec.encode(strs))

arr = ['samin','yasar']

codec = Codec()
msg = codec.encode(arr)
print(msg)
print(codec.decode(msg))