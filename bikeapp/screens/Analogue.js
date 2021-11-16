import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';

export default function Recommend(params) {
  const navigation = params.navigation;
  return (
    <ScrollView
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Ionicons name="arrow-back-outline" size={30} color="#000" />
        </TouchableOpacity>
        <View
          style={{ backgroundColor: '#fda256', padding: 4, borderRadius: 5 }}>
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 12 }}>
            Analogue Watches
          </Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Ionicons
            style={{ marginLeft: 15 }}
            name="cart-outline"
            size={30}
            color="#000"
          />
        </View>
      </View>



       <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <View style={{ marginTop: 30 }}>
          <View
            style={{
              marginRight: 20,
              backgroundColor: '#f4f2f2',
              width: 170,
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
              source={require('./Images/wa-3.png')}
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
              marginRight: 20,
              backgroundColor: '#f4f2f2',
              width: 170,
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
              source={require('./Images/wa-6.png')}
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
              source={require('./Images/rwa-1.png')}
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
              marginRight: 20,
              backgroundColor: '#f4f2f2',
              width: 170,
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
              source={require('./Images/rwa-3.png')}
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
              source={require('./Images/wa-7.png')}
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

    </ScrollView>
  );
}
