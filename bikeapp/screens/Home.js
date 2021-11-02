import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';

export default function Home(params) {
  const navigation = params.navigation;
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        paddingTop: 55,
        paddingHorizontal: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Ionicons name="ios-menu-outline" size={30} color="#000" />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Ionicons
            style={{ marginLeft: 15 }}
            name="cart-outline"
            size={30}
            color="#000"
          />
        </View>
      </View>

      <Text style={{ marginTop: 18, color: 'grey' }}>
        Discover the world's{' '}
        <Text style={{ color: '#ffa94d', fontSize: 20, fontWeight: 'bold' }}>
          Best Watches
        </Text>{' '}
      </Text>

      <Text style={{ fontWeight: 'boldest', marginBottom: 10, marginTop: 20}}>Categories</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View
          style={{
            backgroundColor: '#f4f2f2',
            padding: 10,
            paddingHorizontal: 15,
            borderRadius: 12,
          }}>
          <TouchableOpacity>
            <Text style={{ color: 'orange' }}>All</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{ backgroundColor: '#f4f2f2', padding: 10, borderRadius: 12 }}>
          <TouchableOpacity>
            <Text style={{ color: '#828080' }}>We Recommend</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{ backgroundColor: '#f4f2f2', padding: 10, borderRadius: 12 }}>
          <TouchableOpacity>
            <Text style={{ color: '#828080' }}>Popular</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{ backgroundColor: '#f4f2f2', padding: 10, borderRadius: 12 }}>
          <TouchableOpacity>
            <Text style={{ color: '#828080' }}>Trending</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <View style={{ marginTop: 30 }}>
          <View
            style={{
              marginRight: 20,
              backgroundColor: '#f4f2f2',
              width: 160,
              height: 260,
              borderRadius: 25,
              padding: 15,
            }}>
            <Image
              style={{
                height: 150,
                width: 90,
                justifyContent: 'center',
                alignSelf: 'center',
              }}
              source={require('./Images/wa-4.png')}
            />
            <Text style={{ color: '#828080', textAlign: 'center' }}>
              Schaffhausen{' '}
            </Text>
            <Text style={{ fontWeight: 'bolder', textAlign: 'center' }}>
              <Text style={{ color: 'orange', textAlign: 'center' }}>$</Text>{' '}
              1,700.00
            </Text>
           <View
              style={{
                marginTop: 15,
                backgroundColor: '#fd9843',
                alignSelf: 'center',
                borderRadius: 10,
                paddingVertical: 5,
                paddingHorizontal: 20,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    color: '#fff',
                    fontWeight: 'bold',
                    textAlign: 'center', 
                  }}>
                  Add to Cart
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <View
            style={{
              backgroundColor: '#f4f2f2',
              width: 160,
              height: 260,
              borderRadius: 25,
              padding: 15,
            }}>
            <Image
              style={{
                height: 150,
                width: 90,
                justifyContent: 'center',
                alignSelf: 'center',
              }}
              source={require('./Images/wa-5.png')}
            />
            <Text style={{ color: '#828080', textAlign: 'center' }}>
              DD Classic Watch
            </Text>
            <Text style={{ fontWeight: 'bolder', textAlign: 'center' }}>
              <Text style={{ color: 'orange', textAlign: 'center' }}>$</Text>{' '}
              1,700.00
            </Text>
            <View
              style={{
                marginTop: 15,
                backgroundColor: '#fd9843',
                alignSelf: 'center',
                borderRadius: 10,
                paddingVertical: 5,
                paddingHorizontal: 20,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    color: '#fff',
                    fontWeight: 'bold',
                    textAlign: 'center', 
                  }}>
                  Add to Cart
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <View style={{ marginTop: 30 }}>
          <View
            style={{
              backgroundColor: '#f4f2f2',
              width: 160,
              height: 260,
              borderRadius: 25,
              padding: 15,
              marginRight: 20,
            }}>
            <Image
              style={{
                height: 150,
                width: 90,
                justifyContent: 'center',
                alignSelf: 'center',
              }}
              source={require('./Images/wa-2.png')}
            />
            <Text style={{ color: '#828080', textAlign: 'center' }}>
              Daniel Wellington
            </Text>
            <Text style={{ fontWeight: 'bolder', textAlign: 'center' }}>
              <Text style={{ color: 'orange', textAlign: 'center' }}>$</Text>{' '}
              1,700.00
            </Text>
           <View
              style={{
                marginTop: 15,
                backgroundColor: '#fd9843',
                alignSelf: 'center',
                borderRadius: 10,
                paddingVertical: 5,
                paddingHorizontal: 20,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    color: '#fff',
                    fontWeight: 'bold',
                    textAlign: 'center', 
                  }}>
                  Add to Cart
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <View
            style={{
              backgroundColor: '#f4f2f2',
              width: 160,
              height: 260,
              borderRadius: 25,
              padding: 15,
            }}>
            <Image
              style={{
                height: 150,
                width: 90,
                justifyContent: 'center',
                alignSelf: 'center',
              }}
              source={require('./Images/wa-2.png')}
            />
            <Text style={{ color: '#828080', textAlign: 'center' }}>
              St Mawes Watch
            </Text>
            <Text style={{ fontWeight: 'bolder', textAlign: 'center' }}>
              <Text style={{ color: 'orange', textAlign: 'center' }}>$</Text>{' '}
              160.00
            </Text>
            <View
              style={{
                marginTop: 15,
                backgroundColor: '#fd9843',
                alignSelf: 'center',
                borderRadius: 10,
                paddingVertical: 5,
                paddingHorizontal: 20,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    color: '#fff',
                    fontWeight: 'bold',
                    textAlign: 'center', 
                  }}>
                  Add to Cart
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
